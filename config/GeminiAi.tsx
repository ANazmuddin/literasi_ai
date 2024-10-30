/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};


export const chatSession = model.startChat({
    generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
    history: [
        {
            role: "user",
            parts: [
            {text: "create kids story on description for 5-8 Years kids, Educational story, and all images in paper cut style: story of boy and magic school , give me 5 chapter, with detailed image text prompt for each of chapter and image prompt for story cover book with story name, all in JSON field format"},
            ],
        },
        {
            role: "model",
            parts: [
            {text: "```json\n{\n  \"story_name\": \"The Boy Who Went to Magic School\",\n  \"cover_image\": {\n    \"description\": \"A paper cut style image of a boy with a mischievous grin, wearing a pointed wizard hat, standing in front of a towering, colorful castle with swirling smoke coming from its chimneys. The castle has a large, arched entrance with a sign above it that reads 'Magic School'. Stars and a crescent moon are in the night sky.\",\n    \"style\": \"paper cut\"\n  },\n  \"chapters\": [\n    {\n      \"chapter_title\": \"A Curious Letter\",\n      \"description\": \"A young boy, Leo, sits at his kitchen table, eyes wide with excitement as he reads a letter. The letter has a wax seal with a swirling image of a magic wand. The kitchen is decorated with paper cut images of food and a family portrait.\",\n      \"style\": \"paper cut\"\n    },\n    {\n      \"chapter_title\": \"The Journey Begins\",\n      \"description\": \"Leo packs his suitcase, filled with paper cut images of toys, books, and a magic wand. He walks down a cobblestone path, holding a paper cut map that points to the magical school. The path is lined with trees with paper cut leaves that are changing color.\",\n      \"style\": \"paper cut\"\n    },\n    {\n      \"chapter_title\": \"Welcome to Magic School\",\n      \"description\": \"Leo arrives at the grand gates of Magic School. The gates are made of paper cut iron with ornate designs. He is greeted by a friendly talking owl with paper cut feathers and a wise, smiling wizard wearing a long, flowing robe.  The school itself is a magnificent castle with paper cut towers and windows.\",\n      \"style\": \"paper cut\"\n    },\n    {\n      \"chapter_title\": \"Lessons in Magic\",\n      \"description\": \"Leo sits in a classroom with other children, all wearing paper cut wizard hats. They are learning about different spells and charms from a paper cut teacher with a long white beard. The classroom is filled with paper cut books, globes, and magical objects.\",\n      \"style\": \"paper cut\"\n    },\n    {\n      \"chapter_title\": \"Leo's First Spell\",\n      \"description\": \"Leo practices his first spell, using a paper cut wand to make a paper cut flower bloom in a paper cut pot. The room is filled with paper cut butterflies and the air is filled with sparkling paper cut light. Leo smiles with pride and confidence.\",\n      \"style\": \"paper cut\"\n    }\n  ]\n}\n``` \n"},
            ],
        },
    ],
});