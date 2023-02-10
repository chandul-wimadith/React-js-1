import React from "react";
import { createContext } from "react";

export const themes = {
    light:{
      fground:"#000000",
      background:"#eeeeee"
    },
    dark:{
        fground:"#ffffff",
        background:"#222222"

    }
}
export const themecontext = createContext(themes);