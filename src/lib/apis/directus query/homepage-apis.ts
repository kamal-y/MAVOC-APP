import directus from "@/lib/directus";
import { readSingleton } from "@directus/sdk";
import {
  NavbarItem,
  FooterItems,
  aboutUsType,
  OurPromiseSection,
  HeroSectionType,
} from "@/lib/types/homepage-types";

export const fetchNavbarItems = async (): Promise<NavbarItem> => {
  try {
    const response = await directus.request(readSingleton("navbar"));

    return response;
  } catch (error) {
    console.error("Error fetching fetchNavbarItems data:", error);
    throw error;
  }
};

export const fetchFooterData = async (): Promise<FooterItems> => {
  try {
    const response = await directus.request(
      readSingleton("footer", {
        fields: ["*", `payment_icon`],
      }),
    );

    return response;
  } catch (error) {
    console.error("Error fetching fetchFooterData data:", error);
    throw error;
  }
};

export const fetchAboutUsData = async (): Promise<aboutUsType> => {
  try {
    const response = await directus.request(readSingleton("about_us"));

    return response;
  } catch (error) {
    console.error("Error fetching fetchAboutUsData data:", error);
    throw error;
  }
};

export const fetchOurPromiseSectionData =
  async (): Promise<OurPromiseSection> => {
    try {
      const response = await directus.request(
        readSingleton("our_Promise_Section"),
      );

      return response;
    } catch (error) {
      console.error("Error fetching fetchOurPromiseSectionData data:", error);
      throw error;
    }
  };

export const fetchOurHeroSectionData = async (): Promise<HeroSectionType> => {
  try {
    const response = await directus.request(readSingleton("hero_section"));

    return response;
  } catch (error) {
    console.error("Error fetching fetchOurHeroSectionData data:", error);
    throw error;
  }
};

// export const createProduct = async () => {
//   try {
//     const response = await directus.request(
//       createItem("products", {
//         name: "yo",
//         price: 1212,
//         description: "hsgjhs",
//       }),
//     );

//     console.log("item craetde in directus is rthis object-->", response);

//     return response;
//   } catch (error) {
//     console.error("Error fetching fetchOurHeroSectionData data:", error);
//     throw error;
//   }
// };
