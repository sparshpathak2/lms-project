// components/AuthWrapper.tsx
import { SignedIn, SignedOut, SignIn } from "@clerk/nextjs";

const AuthWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <>
            <SignedOut>
                <div className="flex h-screen items-center justify-center">
                    <SignIn routing="hash" />
                </div>
            </SignedOut>
            <SignedIn>
                {children}
            </SignedIn>
        </>
    );
};

export default AuthWrapper;
