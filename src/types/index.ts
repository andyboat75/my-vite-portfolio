
export interface IHeaderMenuItem{
  label:string,
  icon:string,
  to:string
}

export type Dict = { [key: string]: any };

export interface TabItem {
  label: string
  slot?: string
  disabled?: boolean
  content?: string
}
