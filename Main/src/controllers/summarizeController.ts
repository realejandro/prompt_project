import { type Request, type Response } from 'express';
import { OpenAI } from '@langchain/openai';
import { PromptTemplate } from '@langchain/core/prompts';
import dotenv from 'dotenv';

dotenv.config();

// Get the OpenAI API key from the environment variables
const apiKey = process.env.OPENAI_API_KEY;
let model: OpenAI;

if (apiKey) {
  // Initialize the OpenAI model if the API key is provided
  model = new OpenAI({ temperature: 0, openAIApiKey: apiKey, modelName: 'gpt-3.5-turbo' });
} else {
  console.error('OPENAI_API_KEY is not configured.');
}

// Create a new prompt template for formatting prompts
const promptTemplate = new PromptTemplate({
  template: 'Summarize the following text using bullet points:\n{content}',
  inputVariables: ['content'],
});

// Format the prompt using the prompt template with the user's text
const formatPrompt = async (text: string): Promise<string> => {
  return await promptTemplate.format({ content: text });
};

// Call the OpenAI API to get a response to the formatted prompt
const promptFunc = async (input: string): Promise<string> => {
  try {
    if (model) {
      return await model.invoke(input);
    }
    return 'No OpenAI API key provided. Unable to provide a response.';
  } catch (err) {
    console.error(err);
    throw err;
  }
};

// Handle the POST request to provide a summary for the user's text
export const getSummary = async (req: Request, res: Response): Promise<void> => {
  const userText: string = req.body.text;

  try {
    if (!userText) {
      res.status(400).json({ error: 'Please provide text to summarize in the request body.' });
      return;
    }

    const formattedPrompt: string = await formatPrompt(userText);
    const result: any = await promptFunc(formattedPrompt);
    res.json({ prompt: userText, formattedPrompt, result });
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error:', error.message);
    }
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
