
export interface Auth{
    status: "checking" | "not-authenticated" | "authenticated";
    username: string | null;
}