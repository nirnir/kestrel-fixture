# Standard manual test-case format

Every manual test case has: title, preconditions, steps, expected result,
risk tag (high / medium / low) and linked component.

Legacy Excel cases are imported as-is and flagged "needs normalization"; they
must be normalized before they can be used in a release run. Automated results
are never entered by hand: CI artifacts are the single source of truth.
