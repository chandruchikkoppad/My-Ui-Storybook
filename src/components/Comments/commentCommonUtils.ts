export const formatUserDetails = (userDetails: any[]) => {
  if (userDetails && Array.isArray(userDetails)) {
    return userDetails.map(({ user }) => ({
      id: user.id,
      name: user.name,
      emailId: user.emailId,
    }));
  }
  return [];
};
interface User {
  name: string;
  emailId: string;
}

export const findUserByName = (name: string, users: User[]): string | null => {
  const matchedUser = users.find(
    (user) => `@${user.name.replace(/\s+/g, '')}` === name
  );
  return matchedUser ? matchedUser.emailId : null;
};
