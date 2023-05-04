import axios, { AxiosResponse } from 'axios';

export async function callGpt(query: string): Promise<GptResponse> {
  try {
    const { data }: AxiosResponse = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-4',
        messages: [{ role: 'user', content: query }]
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    const result = data.choices[0];

    if (result.finish_reason !== 'stop') {
      return {
        success: false,
        finish_reason: result.finish_reason
      };
    }

    return {
      success: true,
      message: result.message.content
    };
  } catch (error) {
    console.error(`Error occurred: ${error}`);
    throw error;
  }
}
