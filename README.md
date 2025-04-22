# **Text Summarization REST API using OpenAI API**

## **Project Overview**

In this project, I built a REST API that accepts text content, calls the OpenAI API to summarize the content, and returns the summarized version in bullet points. This project provided a hands-on learning experience in creating a **Large Language Model (LLM)-based application**, as well as integrating third-party APIs for natural language processing (NLP) tasks.

Through this project, I learned how to leverage the capabilities of LLMs like OpenAI’s GPT to enhance application functionality and deliver meaningful insights from unstructured data. I also gained experience in designing and building a **scalable API**, implementing error handling, and managing sensitive data such as API keys.

**Important Note:** If you decide not to use the OpenAI API due to cost or other considerations, you can still complete the activity manually. Instead of getting direct responses from the AI model, you can use the formatted prompts with ChatGPT or another similar tool to receive the summarization.

---

## **Features**

- Accepts raw text content through a REST API endpoint.
- Interacts with the OpenAI API to summarize the text into clear and concise bullet points.
- Implements error handling, rate limiting, and secure API key management.
- Allows for manual testing and simulation of responses from the OpenAI API.

---

## **Technologies Used**

- **Node.js**: Server-side runtime for building the REST API.
- **Express.js**: Framework for routing and handling HTTP requests.
- **OpenAI API**: For leveraging advanced natural language models to generate summaries.
- **Axios**: HTTP client for making external API requests (to OpenAI).
- **Dotenv**: For securely managing API keys and other environment variables.
- **Jest/Mocha**: For unit testing and ensuring the API functions correctly.

---

## **Learning Outcomes**

- **Building and Integrating with Large Language Models (LLMs)**: I learned how to build applications that leverage LLMs, like OpenAI’s GPT, to perform NLP tasks such as summarization, sentiment analysis, and more.
- **RESTful API Design**: Gained hands-on experience in designing a REST API, which allows external services to interact with the application.
- **Effective Use of External APIs**: Developed skills in integrating third-party APIs to extend the functionality of an app. Specifically, how to communicate with OpenAI’s API and handle responses effectively.
- **Handling API Keys Securely**: Learned how to use environment variables to manage sensitive information like API keys and keep them secure.
- **Scaling and Performance**: Ensured that the application can handle various types of text content, handle errors gracefully, and scale when needed.

---

## **Setup & Installation**

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/text-summarization-api.git
   cd text-summarization-api
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   - Create a `.env` file in the root directory and add your **OpenAI API Key**.
   - The `.env` file should look like this:
     ```
     OPENAI_API_KEY=your-api-key-here
     ```

4. **Start the server:**
   ```bash
   npm start
   ```

   The API will now be running locally on `http://localhost:3000`.

---

## **API Endpoints**

### **POST /summarize**

- **Description**: Accepts a block of text and returns a summarized version in bullet points using OpenAI’s language model.
- **Request body (JSON)**:
  ```json
  {
    "text": "Your long text content here"
  }
  ```

- **Response (JSON)**:
  ```json
  {
    "summary": [
      "Bullet point 1",
      "Bullet point 2",
      "Bullet point 3"
    ]
  }
  ```

- **Example request**:
  ```bash
  curl -X POST http://localhost:3000/summarize -H "Content-Type: application/json" -d '{"text": "The OpenAI API allows you to access state-of-the-art language models that can generate human-like text responses."}'
  ```

- **Example response**:
  ```json
  {
    "summary": [
      "OpenAI API provides access to advanced language models.",
      "The models can generate human-like text responses."
    ]
  }
  ```

---

## **Manual Testing (Without OpenAI API)**

If you're not using the OpenAI API, you can still manually simulate the summarization by copying the prompt format below and pasting it into ChatGPT or similar models:

- **Prompt Format**:  
  `"Summarize the following text into bullet points:\n\n<Your text here>"`

Once you get the response from the model, you can format it into a list of bullet points manually.

---

## **Considerations**

- **API Rate Limits**: Be mindful of OpenAI's rate limits when using the API. Ensure you have an active API key and consider the usage costs based on the number of requests.
- **Error Handling**: Ensure to handle potential errors gracefully, such as invalid API keys, request timeouts, or issues with the OpenAI API.
- **Security**: Make sure to keep your API key secure and avoid hardcoding it in the source code. Use environment variables for sensitive data.

---

## **Conclusion**

This project gave me valuable experience in building an API that interacts with a **Large Language Model (LLM)**, specifically OpenAI’s GPT, to perform text summarization. It provided insight into how to structure and scale applications that leverage powerful AI models, and also how to handle sensitive data, manage external API interactions, and design APIs that can easily integrate with other systems.

---