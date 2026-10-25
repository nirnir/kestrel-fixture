# Kestrel — unified test management

Kestrel is our internal web app for test evidence. It brings automated test
results and manual test cases together so every release has one traceable
record of what was tested and who signed it off.

> Test fixture for the Prodeology evaluation set. The product is fictional.

## Why

Test evidence is scattered today:

- Automated results live in Harbor CI (our Jenkins-based CI) job logs, per repo.
- Manual test cases live in about 140 Excel workbooks and a set of wiki pages.
- Release sign-off is a wiki checklist plus a chat thread.

Release managers spend about 6 hours per release compiling evidence by
copy-paste, and auditors have asked for traceable test evidence for every release.

## What Kestrel does

1. Ingests automated test results from Harbor CI (JUnit XML, pytest and
   Playwright reports) for every build.
2. Stores manual test cases in a structured, versioned repository.
3. Plans test runs per release that combine automated and manual cases in one run.
4. Gives release managers a sign-off view showing coverage, open failures and who
   approved what.
5. Later, exports an evidence pack for audits.

Kestrel does **not** execute tests. Harbor CI stays the execution engine.

## MVP scope (pilot)

Must have for the pilot with the Payments Core squad and the Atlas release train:

- Automated result ingestion from Harbor CI for the pilot repos
- Manual test case repository with a standard template and version history
- Release test runs combining automated and manual cases
- Release sign-off view with pass / fail / blocked status and the approver

Not in the MVP: flaky-test analytics, requirement traceability to Jira epics,
AI-suggested regression selection, audit evidence export in regulator formats,
and integration with the mobile device lab.

## Who uses it

- Squad test leads plan regression scope for each release (primary MVP users).
- Release managers compile evidence and run the go/no-go (primary MVP users).
- Manual QA engineers write and execute manual cases (heaviest daily users).
- SDETs own automation and want results without digging through CI logs.
- Engineering managers get read-only quality trends; internal audit reviews evidence quarterly.

## Test-case format

See [docs/test-case-format.md](docs/test-case-format.md).

## Development

```
npm install
npm run dev
```
