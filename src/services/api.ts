import axios, { AxiosError } from 'axios';

const API_URL = 'https://api.openai.com/v1';
const API_KEY = import.meta.env.VITE_OPENAI_API_KEY;
const ORG_ID = import.meta.env.VITE_OPENAI_ORG_ID;
const ASSISTANT_ID = 'asst_AOujxHRqxMtWgpThP6gJHLW7';

const headers = {
  'Authorization': `Bearer ${API_KEY}`,
  'OpenAI-Organization': ORG_ID,
  'Content-Type': 'application/json',
  'OpenAI-Beta': 'assistants=v1'
};

export const analyzeDilemma = async (dilemma: string): Promise<string> => {
  try {
    // Step 1: Create a thread
    const threadResponse = await axios.post(`${API_URL}/threads`, {}, { headers });
    const threadId = threadResponse.data.id;

    // Step 2: Add a message to the thread
    await axios.post(`${API_URL}/threads/${threadId}/messages`, {
      role: 'user',
      content: dilemma
    }, { headers });

    // Step 3: Run the assistant
    const runResponse = await axios.post(`${API_URL}/threads/${threadId}/runs`, {
      assistant_id: ASSISTANT_ID,
      model: 'gpt-4' // Specify the model here
    }, { headers });
    const runId = runResponse.data.id;

    // Step 4: Wait for the run to complete
    let runStatus = 'queued';
    while (runStatus !== 'completed' && runStatus !== 'failed') {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
      const statusResponse = await axios.get(`${API_URL}/threads/${threadId}/runs/${runId}`, { headers });
      runStatus = statusResponse.data.status;
      
      if (runStatus === 'failed') {
        throw new Error('Assistant run failed');
      }
    }

    // Step 5: Retrieve the assistant's response
    const messagesResponse = await axios.get(`${API_URL}/threads/${threadId}/messages`, { headers });
    const assistantMessage = messagesResponse.data.data.find(
      (message: any) => message.role === 'assistant'
    );

    if (!assistantMessage || !assistantMessage.content || !assistantMessage.content[0]) {
      throw new Error('No valid response from assistant');
    }

    return assistantMessage.content[0].text.value;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      console.error('OpenAI API Error:', axiosError.response?.data || axiosError.message);
      throw new Error(`OpenAI API Error: ${axiosError.response?.data?.error?.message || axiosError.message}`);
    } else {
      console.error('Error analyzing dilemma:', error);
      throw new Error('Failed to analyze dilemma. Please try again later.');
    }
  }
};