import { useContext } from "react";
import { HomeContext } from "../store/contexts/HomeContext";

export const useHomeContext = () => useContext(HomeContext);
