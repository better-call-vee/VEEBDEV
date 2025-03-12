// How the Internet Works:
// Data flows like wrestlers entering an arena:
// 1. Your device (wrestler) needs an IP address (unique locker number) to enter
// 2. DNS servers act as stadium ushers: translate domain names (WWE.com) to IP addresses
// 3. Data splits into packets (wrestler gear bags) routed through TCP/IP protocols
// 4. Packets travel via routers (security checkpoints) through physical cables/wireless signals

// IP Address Mechanics (IPv4 vs IPv6)
// IPv4: 4.3 billion addresses (like old arena seating - 127.0.0.1)
// IPv6: 340 undecillion addresses (new stadium expansion - 2001:0db8:85a3::8a2e:0370:7334)
// NAT helps conserve IPv4 addresses like shared arena seats

// HTTP vs HTTPS: The Secure Promo Deal
// HTTP:
// - Unencrypted clear-text data transfer (like unsecured backstage area)
// - Uses port 80
// - Vulnerable to "man-in-the-middle" attacks (snoopers reading scripts)

// HTTPS:
// - SSL/TLS encryption (like a private promo meeting with soundproof walls)
// - Uses port 443
// - Certificate authorities verify server identity (like WWE authenticating wrestlers)

// Packet Journey Example (Ordering Merchandise):
// 1. Browser: "GET /tshirt.jpg HTTP/1.1" (request)
// 2. Server: "HTTP/1.1 200 OK" + image data (response)
// 3. HTTPS adds TLS handshake before data transfer

// API Mechanics: The Wrestling Promoter's Assistant
// API acts as Vince McMahon's assistant:
// 1. Client request: "Get me current roster" (like McMahon asking for wrestler list)
// 2. API authenticates request (checks credentials)
// 3. Fetches data from database (checks WWE talent database)
// 4. Returns JSON/XML response (provides formatted roster list)
// 5. Client displays data (McMahon reviews the list)

// Key API Concepts:
// - RESTful principles (stateless interactions)
// - CRUD operations: Create(POST), Read(GET), Update(PUT), Delete(DELETE)
// - Status codes: 200(Success), 404(Not Found), 500(Server Error)
// - Rate limiting (like arena ticket sales restrictions)

// Real-World API Example (Weather Check):
// 1. Client: GET api.weather.com/v3/wx/forecast?lat=32.77&lon=96.79
// 2. API verifies API key
// 3. Server processes request
// 4. Response: {"temp":88, "condition":"sunny", "humidity":"65%"}

// Key Takeaways:
// 1. Internet = physical infrastructure + protocol systems
// 2. HTTPS adds encryption layers to HTTP
// 3. APIs act as data intermediaries with strict communication rules
// 4. DNS enables human-readable web addresses to work with IP infrastructure