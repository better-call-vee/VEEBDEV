/**
 * SINGLE PAGE APPLICATION (SPA) vs MULTI PAGE APPLICATION (MPA)
 * 
 * Imagine a MAGIC BOOK vs a REGULAR BOOK:
 * 
 * SPA (React apps are usually SPAs):
 * - You open the magic book once
 * - When you want new content, the pages MAGICALLY REWRITE THEMSELVES
 * - No page flipping - just smooth content changes
 * - Only the necessary parts update (like text/images changing)
 * - Feels like using a phone app
 * 
 * MPA (Traditional websites):
 * - Every time you want new content
 * - You have to CLOSE the book and get a NEW BOOK
 * - This creates full page reloads (flashing, waiting)
 * 
 * HOW SPA WORKS IN REACT:
 * 1. Load ONE HTML page (the empty book)
 * 2. React fills it with components (adds content)
 * 3. When you click/interact:
 *    - React CHANGES ONLY WHAT'S NEEDED (like swapping a picture)
 *    - No full page reload
 *    - Updates happen instantly (thanks to JavaScript)
 * 
 * BENEFITS:
 * - Super smooth experience
 * - Feels faster after initial load
 * - Works like mobile apps
 * 
 * DRAWBACKS:
 * - First load might be slower (needs to download all magic spells)
 * - Needs JavaScript to work
 * 
 * Example: Gmail, Facebook, Netflix - they all feel like SPAs!
 */