import {map, Matcher, redirect} from "navi";

interface Context {
    token: string;
}

export function withAuthentication(matcher: Matcher<{}, Context>) {
    return map((_: any, context: Context) => context.token 
    ? matcher : redirect('/login'))
}