import directus from "./directus";
import { readItems } from "@directus/sdk";

export const fetchNavbarItems = async (modelName: string) => {
  try {
    const results = await directus.request(
      readItems(modelName, {
        fields: ["name", "url"],
        // sort: ['-publish_date'],
      }),
    );
    return results;
  } catch (error) {
    console.error("Error fetching navbar data:", error);
    throw error;
  }
};
