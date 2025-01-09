import { useQuery } from "@tanstack/react-query";
import { fetchNavbarItems, fetchFooterData, fetchAboutUsData } from "./apis";

export const useNavbarItems = (modelName: string) => {
  return useQuery({
    queryKey: [modelName],
    queryFn: () => fetchNavbarItems(modelName),
  });
};

export const useFooterData = (modelName: string) => {
  return useQuery({
    queryKey: [modelName],
    queryFn: () => fetchFooterData(modelName),
  });
};

export const useAboutUsData = (modelName: string) => {
  return useQuery({
    queryKey: [modelName],
    queryFn: () => fetchAboutUsData(modelName),
  });
};
