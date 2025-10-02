import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
  ReactNode
} from 'react';

type Layout = { navCollapsed: boolean };

type LayoutContextValue = {
  layout: Layout;
  setLayout: Dispatch<SetStateAction<Layout>>;
};

const LayoutContext = createContext<LayoutContextValue>({
  layout: { navCollapsed: false },
  setLayout: () => null,
});

type LayoutProviderProps = {
  children: ReactNode;
};

export const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [layout, setLayout] = useState({
    navCollapsed: true,
  });

  return (
    <LayoutContext.Provider value={{ layout, setLayout }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => {
  const { layout } = useContext(LayoutContext);
  return layout;
};

export const useToggleNav = () => {
  const { setLayout } = useContext(LayoutContext);
  return () =>
    setLayout((layout) => ({ ...layout, navCollapsed: !layout.navCollapsed }));
};
