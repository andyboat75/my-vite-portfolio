import {toValue} from 'vue'

/**
 *
 * @param inp_txt usually takes name of element
 * @returns
 */
export const useUniqueID = (inp_txt: string) => {
  const txt = toValue(inp_txt);
  const id = txt + "_" + Math.floor(Math.random() * Date.now()).toString(16);

  return id;
};
