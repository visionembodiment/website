# When to Abstract: A Practical Guide

## The Fundamental Principle

**Coupling = How much you must think about simultaneously**

The goal of all abstraction is:
> **Enable independent reasoning - think about one thing at a time**

## The Test for Decoupling

Ask yourself:
> "Can I understand/test/change X without loading Y into my brain?"

If no → separate them.

**Example - Retry Logic:**

**Coupled (must think about HTTP + retry + errors together):**
```ts
class HttpClient {
  async get(url) {
    let attempts = 0;
    while (attempts < 3) {
      try {
        return await fetch(url);
      } catch {
        attempts++;
      }
    }
  }
}
```

**Decoupled (think about each independently):**
```ts
const client = withRetry(new HttpClient())
```

Questions become simple:
- Does HttpClient throw on error? (test in isolation)
- Does withRetry catch and retry? (test in isolation)
- Do they compose? (integration test)

## When to Abstract

### Don't Abstract Prematurely

**The Wrong Approach:**
1. "I might need this later"
2. "This follows SOLID principles"
3. "The book says to do this"

**The Right Triggers:**
1. ✅ "This test is painful to write"
2. ✅ "I can't understand this function"
3. ✅ "Changing X requires touching 5 files"

### The Discovery Process

**Phase 1: Make it work**
```
Write messy code → It works → Acceptance test passes
```

**Phase 2: Feel the pain**
```
Try to test → Hard to understand → Slow to change
```

**Phase 3: Respond to pain**
```
Extract abstraction → Testing easier → Understanding clearer
```

**Phase 4: Lock it in**
```
Unit test the abstraction → Refactor with confidence
```

### The Rule of Three

**Don't abstract before 3 concrete examples**

Or as Sandi Metz says:
> "Duplication is far cheaper than the wrong abstraction"

**Example:**
1. Implement scroll behavior shittily ✅
2. Implement different scroll behavior shittily ✅
3. Implement third variation shittily ✅
4. **FEEL the duplication pain**
5. **NOW** extract the pattern (you've earned it)

## Testing Strategies

### BDD-Style Unit Tests

We use BDD syntax for unit tests (nested `describe`):

```ts
describe('useScrollDirection', () => {
  describe('when sticky', () => {
    describe('when scrolling down', () => {
      it('should follow scroll delta', () => {
        // Arrange
        // Act
        // Assert
      })
    })
  })
})
```

This is NOT full BDD (no acceptance tests driving development). It's **behavior-focused unit tests** using BDD syntax for readability.

### Inside-Out vs Outside-In

**Inside-Out (start with units):**
- When: Known contracts (HTTP specs, defined APIs)
- Process: Build small pieces → assemble → verify integration

**Outside-In (start with acceptance):**
- When: Unknown behavior (novel UX, complex logic)
- Process: Acceptance test → implement → discover units → refactor

**The Real Distinction:**

Not about the domain, but about **confidence in design**:
- High confidence → can start anywhere
- Low confidence → MUST start with acceptance to avoid premature abstraction

### The Practical Flow (Discovery-Driven)

**For Unknown Behavior:**

1. **Acceptance test** - Define WHAT you want
   ```ts
   it('should hide header smoothly when scrolling')
   ```

2. **Implement naively** - Make it pass (one big component, whatever works)
   ```tsx
   // All logic inline, ugly but working
   ```

3. **Feel the pain** - Try to test, understand, change it
   - "This is hard to test"
   - "I can't follow this logic"
   - "I want to reuse this"

4. **Refactor** - Extract DISCOVERED abstractions
   ```ts
   // NOW extract useScrollDirection hook
   ```

5. **Unit test** - Lock in the refactored pieces
   ```ts
   describe('useScrollDirection', () => {
     // Test the hook in isolation
   })
   ```

## The Cost/Benefit Analysis

### When Immediate Abstraction is OK

**If the abstraction is simpler than the coupled code:**

Example - Retry decorator:
- 15 lines
- Well-known pattern
- Makes testing trivial
- **Extract immediately**

### When to Wait

**If the abstraction is speculative:**

Example - Novel scroll interaction:
- Don't know if you need translateY or boolean
- Don't know threshold values
- Don't know snap behavior
- **Wait for discovery**

## Red Flags

### Premature Abstraction
- Writing unit tests for classes that don't exist yet
- Guessing at interfaces before implementation
- "I'll need this flexibility later"
- Applying patterns because they're "best practice"

### Under-Abstraction
- Can't test without mocking 5 dependencies
- 10+ things in working memory to understand code
- Copy-pasting similar code repeatedly
- Changes ripple through unrelated files

## The Litmus Test

**Good abstraction:**
```
Question: "Does retry work?"
Answer: Look at withRetry tests (30 seconds)
```

**Poor abstraction:**
```
Question: "Does retry work?"
Answer: Read HttpClient + error handling + retry logic + integration tests (30 minutes)
```

## Practical Examples

### Example 1: Our Header Scroll

**Coupled approach (premature):**
```ts
// Day 1: Write unit tests for useScrollDirection
// Problem: Don't know if we need translateY yet!
```

**Discovery approach:**
```ts
// Day 1: Implement in Header with boolean show/hide
// Day 2: Realize we need smooth transitions
// Day 3: Discover we need translateY pixels
// Day 4: Extract hook NOW (know exactly what it needs)
// Day 5: Unit test the discovered hook
```

### Example 2: HTTP Client

**Known contract (can abstract early):**
```ts
// Retry is well-understood
// Decorator pattern is simpler than coupling
// Extract immediately
const client = withRetry(new HttpClient())
```

## Key Insights

1. **Abstraction serves cognition** - not architecture purity
2. **Pain is your guide** - not principles or patterns
3. **Discovery beats speculation** - let design emerge
4. **Three examples minimum** - before extracting patterns
5. **Simpler is better** - even if it violates "rules"

## Summary

The answer to "when should I abstract?" is:

> **When keeping it together makes it harder to think**

Not:
- When it violates a principle
- When the pattern book says so
- When you think you might need it

But:
- When testing becomes painful
- When understanding requires mental gymnastics
- When changes require coordinating multiple concerns

**Trust the pain. Let the design emerge.**

## Testing Strategy: Cutting Through The Confusion

### The Hard Truth About Testing

**Testing terminology is confusing. That's normal.**

The industry can't agree on definitions. Every project is different. Rules contradict each other.

**Accept this:** You will always feel uncertain about testing strategy.

### Clear Definitions (For This Project)

**Unit tests:**
- Test one piece (function, class, hook)
- Mock all dependencies
- Fast (milliseconds)
- File: `Component.unit.test.tsx`

**Integration tests:**
- Test multiple pieces working together
- Real dependencies, mock boundaries (DB, API, network)
- Medium speed (10-100ms)
- File: `test/integration/Feature.integration.test.tsx`

**Acceptance tests:**
- Test complete user scenarios
- No mocks, real browser
- Slow (seconds)
- File: `e2e/feature.spec.ts`

### When To Write Each Type

**Don't follow rules. Manage risk.**

#### Write Unit Tests When:

✅ **Dependencies are simple/stable**
```ts
// Hook uses window.scrollY (stable browser API)
// Mock it, test the math
```

✅ **Logic is complex**
```ts
// Scroll delta calculations
// Edge cases (negative scroll, etc)
```

✅ **Failures are obvious**
```ts
// If math is wrong, unit test catches it
// Integration won't add new information
```

#### Write Integration Tests When:

✅ **Mocking might hide bugs**
```ts
// Hook depends on ref.current.offsetHeight
// What if ref is null? Height changes?
// Mocked unit test might miss real DOM quirks
```

✅ **Interaction creates emergent behavior**
```ts
// Header re-renders → hook re-runs → causes loop?
// Only visible when components actually interact
```

✅ **You need debugging precision**
```ts
// Acceptance fails: "Header didn't hide" (vague)
// Integration fails: "Hook received null ref" (precise)
```

#### Write Acceptance Tests When:

✅ **Testing user-visible behavior**
```ts
// User scrolls down → header hides
// This is what actually matters
```

✅ **Integration tests become too many**
```ts
// Don't test 20 combinations in integration
// Test 3 main scenarios in acceptance
```

✅ **You need confidence it works in production**
```ts
// Real browser, real network, real timing
```

### The Decision Tree

```
Start: Write acceptance test
  ↓
Does it fail quickly with clear message?
  Yes → STOP. You're done.
  No → Add integration tests
    ↓
    Does integration fail with clear message?
      Yes → STOP. You're done.
      No → Add unit tests
```

**The rule:**
> Write tests at the lowest level that gives you confidence

### Use BDD-Style Naming (Regardless of Type)

**Don't:**
```ts
it('should subtract scrollDelta from translateY')
```

**Do:**
```ts
describe('when sticky', () => {
  describe('when scrolling down', () => {
    it('should follow scroll delta', () => {
      // Test tells a story
    })
  })
})
```

**This works for ALL test types:**
- Unit tests tell the behavior story
- Integration tests tell the interaction story
- Acceptance tests tell the user story

### Test Behavior, Not Implementation

**Wrong:**
```ts
it('should call setTranslateY with Math.max result', () => {
  // Testing implementation details
})
```

**Right:**
```ts
it('should not move beyond header height', () => {
  // Testing observable behavior
})
```

### The Combinatorial Explosion Problem

**Integration tests multiply:**
```
Hook: 5 behaviors
Header: 4 behaviors
Integration: 5 × 4 = 20 tests

Add Footer: 5 × 4 × 3 = 60 tests 💥
```

**Solution: Test contracts, not combinations**

**Don't test:**
- ❌ Every prop passed correctly
- ❌ Every state combination
- ❌ Every CSS class applied

**Test:**
- ✅ The seam where things commonly break
- ✅ "Does Header pass ref to hook?" (one test)
- ✅ Everything else in acceptance or unit

### TypeScript IS Your Contract Test

**You don't need to test:**
```ts
const { translateY } = useScrollDirection(ref)
header.style.transform = `translateY(${translateY}px)`
```

TypeScript already verifies:
- Hook returns `{ translateY: number }`
- Header expects number for transform

**Only test:**
- Does the hook calculate correctly? (unit)
- Does the system work? (acceptance)

### When Rules Fail

**Software isn't physics. There are no universal laws.**

Because:
- Systems are too complex to fully model
- Dependencies have unknown behaviors
- Real world is chaotic (network, timing, hardware)
- **You can't know everything**

**The REAL rule:**
> Write the test that would have caught the last bug

Not:
- ❌ "Always write integration tests"
- ❌ "Unit tests are sufficient"

But:
- ✅ "This broke in production. What test would have caught it?"
- ✅ "I'm worried about X. Let me test X."
- ✅ "This feels risky. Add a test."

### Pragmatic Examples

**Example: Our Header Scroll**

**What we're worried about:**
1. Scroll animation feels janky
2. Header flashes on sticky transition
3. Ref not passed correctly

**Tests we write:**
```ts
// Unit: Hook scroll math
describe('useScrollDirection', () => {
  describe('when sticky', () => {
    describe('when scrolling down', () => {
      it('should follow scroll delta')
    })
  })
})

// Integration: Hook + Header connection
describe('Header Integration', () => {
  it('should connect hook to DOM element')
})

// Acceptance: Full behavior
test('header hides smoothly when scrolling', async ({ page }) => {
  // Real browser test
})
```

**Not because rules say so. Because these address our specific risks.**

### Common Pitfalls

**Over-testing:**
```ts
// Testing trivial rendering
it('should render nav element', () => {
  expect(screen.getByRole('navigation')).toBeInTheDocument()
})
// ^ Only test if this has failed before
```

**Under-testing:**
```ts
// Complex scroll math with no tests
// ^ Test this - high risk of bugs
```

**Testing implementation:**
```ts
// Checking internal state
expect(component.state.translateY).toBe(-30)
// ^ Test observable behavior instead
```

### The Bottom Line

**Stop asking:** "Is this unit or integration?"

**Start asking:** "Does this give me confidence?"

**File location tells you the scope:**
```
hooks/useScrollDirection.unit.test.ts  → Test the hook
test/integration/Header.integration.test.tsx  → Test hook + Header
e2e/scroll.spec.ts  → Test real browser
```

**Test name tells you WHAT (using BDD style):**
```
when scrolling down → should hide header
```

**Trust your judgment. Ship code. See what breaks. Learn. Adjust.**

---

*This document captures lessons learned from real experience, not textbook theory.*
