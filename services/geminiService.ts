
import { HERO_DATA, SKILLS_DATA, PROJECTS_DATA, ABOUT_DATA } from '../constants';



// Construct a system context based on the portfolio data
const SYSTEM_INSTRUCTION = `
You are the AI Assistant for ${HERO_DATA.name}, an aspiring AI Engineer. 
Your role is to represent her professionally on her portfolio website.
Answer questions about her skills, projects, and background based on the following context.
Keep answers concise, professional, and friendly.

CONTEXT:
Name: ${HERO_DATA.name}
Title: ${HERO_DATA.title}
Background: ${HERO_DATA.description}
About: ${ABOUT_DATA}

SKILLS:
${SKILLS_DATA.map(cat => `${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')}

PROJECTS:
${PROJECTS_DATA.map(p => `- ${p.title} (${p.category}): ${p.description}`).join('\n')}

If asked about something not in this context, politely say you don't have that information but suggest contacting her directly.
`;

export const sendMessageToGemini = async (history: {role: string, parts: {text: string}[]}[], message: string) => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // We can't persist the chat object easily in this stateless service pattern without context or redux, 
    // so we will use generateContent with the history as context or just a simple single-turn for now 
    // to keep it robust. A better approach for a real chat is passing the history to the prompt.
    
    // However, the best way here using the new SDK is creating a chat session if we could maintain state.
    // For simplicity in this React component structure, we will create a fresh chat with history each time 
    // or just append history to the prompt.
    
    // Let's use the proper Chat API but re-initialize it with history.
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      },
      history: history 
    });

    const result = await chat.sendMessage({ message });
    return result.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm currently having trouble connecting to the AI brain. Please try again later.";
  }
};
