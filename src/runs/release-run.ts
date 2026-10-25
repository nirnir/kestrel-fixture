// A release test run combines automated results and manual cases (fixture placeholder).
export interface ReleaseRun { release: string; automated: string[]; manual: string[]; signedOffBy?: string; }
