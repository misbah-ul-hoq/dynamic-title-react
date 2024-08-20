declare module "dynamic-title-react" {
  const useDocumentTitle: (title: string, prevailOnUnmount?: boolean) => void;
  export default useDocumentTitle;
}
