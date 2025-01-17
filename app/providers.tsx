// our theme provider
import ThemeProvider from "@/app/theme-provider";

// because we could have other globle providers like react query, authetication related stuff, we created a providers component that wraps the main layout and which ever provider we are using we can import here so that our app has access to all the provider from a same providers component
// initially we start with theme provider, slowing building upto the toast provider and auth and many more
// this provider component is very imp

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
};
export default Providers;
