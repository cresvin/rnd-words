// prettier-ignore
const WORDS = [
  // Emotions
  "happy", "sad", "excited", "angry", "joyful", "fearful",
  "bored", "surprised", "confused", "nervous", "relaxed", "anxious",
  "calm", "frustrated", "content", "disappointed", "hopeful", "jealous",
  "grateful", "lonely", "proud", "ashamed", "guilty", "curious",

  // Animals
  "cat", "dog", "elephant", "lion", "tiger", "giraffe",
  "rabbit", "bear", "dolphin", "eagle", "penguin", "kangaroo",
  "monkey", "panda", "fox", "wolf", "zebra", "rhino",
  "whale", "shark", "octopus", "frog", "horse", "owl",

  // Food
  "apple", "banana", "pizza", "burger", "pasta", "salad",
  "bread", "cheese", "chocolate", "steak", "sushi", "carrot",
  "broccoli", "sandwich", "pancake", "strawberry", "grape", "orange",
  "chicken", "fish", "potato", "rice", "egg", "cereal",

  // Other
  "car", "house", "tree", "computer", "phone", "book",
  "river", "mountain", "ocean", "bicycle", "lamp", "shirt",
  "desk", "shoe", "sun", "star", "cloud", "clock",
  "chair", "table", "window", "door", "bed", "camera",
] as const;

export function generate(numberOfWords = 3, separator: string = "-") {
  const result: string[] = [];

  if (numberOfWords < 1) {
    throw new Error("Invalid number of words");
  } else if (numberOfWords > WORDS.length) {
    throw new Error(
      `Requested number of words exceeds the maximum limit of ${WORDS.length}.`
    );
  }

  for (let i = 0; i < numberOfWords; i++) {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    result.push(WORDS[randomIndex] as string);
  }

  return result.join(separator);
}
