// Parses JUnit XML reports uploaded by Harbor CI builds (fixture placeholder).
export interface IngestedResult { build: string; suite: string; test: string; outcome: "pass" | "fail" | "skipped"; }
