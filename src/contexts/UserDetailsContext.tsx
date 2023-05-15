import React from "react";

export const UserDetailsContext = React.createContext<any>({});

export default function UserDetailsContextProvider({ children }: any) {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  function updateUser(latest: any) {
    setUser(latest);
  }
  return (
    <UserDetailsContext.Provider
      value={{
        user,
        updateUser,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserDetailsContext.Provider>
  );
}
