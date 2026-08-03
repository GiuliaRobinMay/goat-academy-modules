/* =============================================================
   GOAT ACADEMY · Academy Modules — course data
   -------------------------------------------------------------
   Single source of truth for the course structure.
   Every lesson carries its Mighty Networks identifiers
   (postId / videoId / asset url) so the Headless API team can
   map progress + playback 1:1 without touching the UI code.
   ============================================================= */

const BRAND = {
  network: "GOAT ACADEMY",
  course: "Academy Modules",
  edition: "2026 EDITION",
  tagline: "Your full path from complete beginner to independent trader.",
  welcomeQuote:
    "Six months. One clear path. Built with you in mind — wherever you are in your trading journey.",
  welcomeAuthor: "FELIX, FOUNDER OF GOAT ACADEMY",
  mightySpace: {
    title: "Academy Modules",
    spaceId: "22577702",
    url: "https://friends.goatacademy.org/spaces/22577702",
  },
};

/* Lesson content is composed of blocks: video | text | tool | image.
   - provider "mighty": member-gated video (opens in the Academy until
     the Headless API playback hookup is done by the tech team).
   - provider "fathom": public embed, plays inline. */

const COURSE_SECTIONS = [
  {
    id: "start-here",
    tag: "START HERE",
    title: "Foundations & Setup",
    blurb: "Mindset, market access and the four patterns every chart lives in.",
    parts: [
      {
        id: "motivation",
        tag: "PART 1 · MOTIVATION",
        title: "How Traders Really Win",
        mighty: { postId: "96731414", url: "https://friends.goatacademy.org/posts/academy-modules-%E2%9E%A7-part-1-motivation-how-traders-really-win" },
        lessons: [
          {
            id: "market-crashes",
            num: "1",
            title: "Market Crashes are Predictable",
            description: "Why the biggest market moves leave footprints — and how prepared traders position themselves before the crowd.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/b5c22b55-3d69-42ac-92c8-b2d89522de97/Banner_01.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731415", videoId: "1729260559", asset: "https://video.mn.co/assets/105401336/market_crashes_are_predictable.mp4", url: "https://friends.goatacademy.org/posts/academy-modules-1%EF%B8%8F%E2%83%A3-market-crashes-are-predictable" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
          {
            id: "busy-fools",
            num: "2",
            title: "Busy Fools: Key Trading Lessons",
            description: "The costly habits that keep busy traders poor — and the key lessons to trade less but win more.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/c0e2f7ad-4a02-4eff-a94d-196c52be43b2/Banner_02.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731418", videoId: "1729187370", asset: "https://video.mn.co/assets/105319441/busy_fools_and_other_lessons.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-2%EF%B8%8F%E2%83%A3-busy-fools-key-trading-lessons" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
        ],
      },
      {
        id: "broker",
        tag: "PART 2 · BROKER",
        title: "Setting Up Market Access",
        note: "Choose only one broker.",
        mighty: { url: "https://friends.goatacademy.org/posts/academy-modules-%E2%9E%A7-part-2-broker-setting-up-market-access-choose-only-one" },
        lessons: [
          {
            id: "ibkr-registration",
            num: "1",
            title: "Registration — IBKR (Non-US Students)",
            description: "Step-by-step registration walkthrough for Interactive Brokers — the recommended broker for non-US students.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/860b5aa7-3ee3-4a27-bcc8-56fbde8ba8d2/Banner_04.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731425", videoId: "1785167716", asset: "https://video.mn.co/assets/160114650/IBKRbeginner.mp4", url: "https://friends.goatacademy.org/posts/academy-modules-1%EF%B8%8F%E2%83%A3-registration-ibkr-non-us-students" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
          {
            id: "thinkorswim-help",
            num: "2",
            title: "Thinkorswim: Broker Help",
            description: "Getting set up with Thinkorswim (Charles Schwab) — the recommended platform for US students.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/308dfd66-c332-4785-97c9-b1d21ef73336/Banner_05.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731426", videoId: "1770821056", asset: "https://video.mn.co/assets/150129616/tosbeginner.mp4", url: "https://friends.goatacademy.org/posts/academy-modules-2%EF%B8%8F%E2%83%A3-thinkorswim-broker-help" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
        ],
      },
      {
        id: "software",
        tag: "PART 3 · SOFTWARE TO USE",
        title: "Your Trading Tools",
        mighty: { url: "https://friends.goatacademy.org/posts/academy-modules-%E2%9E%A7-part-3-software-to-use-your-trading-tools" },
        lessons: [
          {
            id: "tradevision-setup",
            num: "1",
            title: "TradeVision Setup",
            description: "A comprehensive walkthrough of TradeVision — your charting and analysis home base.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/23bb02a7-390f-4fc8-8593-3cc30774406a/Banner_06.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731428", videoId: "1761671156", asset: "https://video.mn.co/assets/143538702/tradevision-_a_comprehensive_walkthrough_october_21st_2025.mp4", url: "https://friends.goatacademy.org/posts/academy-modules-1%EF%B8%8F%E2%83%A3-tradevision-setup" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
        ],
      },
      {
        id: "patterns",
        tag: "PART 4 · THE 4 PATTERNS",
        title: "Core Market Structure",
        mighty: { url: "https://friends.goatacademy.org/posts/academy-modules-%E2%9E%A7-part-4-the-4-patterns-core-market-structure" },
        lessons: [
          {
            id: "pattern-overview",
            num: "1",
            title: "Pattern Framework Overview",
            description: "The framework: every chart lives in one of four patterns. Learn to name the market before you trade it.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/082e3386-558b-41f7-9d4e-af49ef472a00/Banner_09.jpg?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731434", videoId: "1729189753", asset: "https://video.mn.co/assets/105322299/overview.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-1%EF%B8%8F%E2%83%A3-pattern-framework-overview" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
          {
            id: "base-pattern",
            num: "2",
            title: "Base Pattern",
            description: "Sideways consolidation — the launchpad. How to spot a base and what it tells you about what comes next.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/ccf6a82a-ed87-45e6-a5e8-ca8f703ae8d9/Banner_10.jpg?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731436", videoId: "1729223682", asset: "https://video.mn.co/assets/105350101/base_pattern.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-2%EF%B8%8F%E2%83%A3-base-pattern" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
          {
            id: "climbing-pattern",
            num: "3",
            title: "Climbing Pattern",
            description: "The uptrend. Riding strength above the 50 SMA and knowing when the climb is healthy.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/37d8d08c-defd-4687-8461-e3d4f03bd911/Banner_11.jpg?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731438", videoId: "1729223815", asset: "https://video.mn.co/assets/105350195/climbing_pattern.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-3%EF%B8%8F%E2%83%A3-climbing-pattern" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
          {
            id: "tired-pattern",
            num: "4",
            title: "Tired Pattern",
            description: "Momentum fading. The warning signs that a climb is running out of fuel.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/751dab88-a1e8-49ad-b437-3ddac845a496/Banner_12.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731439", videoId: "1729223895", asset: "https://video.mn.co/assets/105350272/tired_pattern.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-4%EF%B8%8F%E2%83%A3-tired-pattern" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
          {
            id: "downhill-pattern",
            num: "5",
            title: "Downhill Pattern",
            description: "The downtrend. Why cash is a position — and how to stay out of falling markets.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/dc70a3b9-14c0-4898-b115-b9e711dea2de/Banner_13.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731441", videoId: "1729224223", asset: "https://video.mn.co/assets/105350566/downhill_pattern.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-5%EF%B8%8F%E2%83%A3-downhill-pattern" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
        ],
      },
    ],
  },

  {
    id: "the-basics",
    tag: "THE BASICS",
    title: "Timing & Execution Basics",
    blurb: "When to buy, and exactly how to place the order.",
    mighty: { url: "https://friends.goatacademy.org/posts/academy-modules-%E2%9E%BD-the-basics-timing-execution-basics" },
    parts: [
      {
        id: "when-to-buy",
        tag: "PART 1 · WHEN TO BUY",
        title: "Entry Timing & Market Context",
        mighty: { url: "https://friends.goatacademy.org/posts/academy-modules-%E2%9E%A7-part-1-when-to-buy-entry-timing-market-context" },
        lessons: [
          {
            id: "sector-breakouts",
            num: "1",
            title: "Sector Breakouts & Second-Chance Entries",
            description: "Using sector strength to time entries — and how to catch the second-chance entry when you miss the breakout.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/6c957305-e4a5-4348-8966-8306feeba046/Banner_14.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731443", videoId: "1729225227", asset: "https://video.mn.co/assets/105351359/sector_break_out_2nd_chance.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-1%EF%B8%8F%E2%83%A3-sector-breakouts-second-chance-entries" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
          {
            id: "when-to-buy-investors",
            num: "2",
            title: "When to Buy for Investors",
            description: "The investor entry playbook: scaling in 50/50 at Point A and Point B.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/820e0e0e-7f64-4b62-9592-f75284b4108e/Banner_15.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731445", videoId: "1744704097", asset: "https://video.mn.co/assets/125427623/investors_when_to_buy.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-2%EF%B8%8F%E2%83%A3-when-to-buy-for-investors" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
        ],
      },
      {
        id: "how-to-buy",
        tag: "PART 2 · HOW TO BUY",
        title: "Order Execution Basics",
        mighty: { url: "https://friends.goatacademy.org/posts/academy-modules-%E2%9E%A7-part-2-how-to-buy-order-execution-basics" },
        lessons: [
          {
            id: "buy-stop-limit",
            num: "1",
            title: "Buy Stop-Limit Orders (GTC)",
            description: "Setting a buy stop-limit order with GTC so the breakout triggers your entry automatically.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/93dea9e6-71ac-4035-bcaf-1d8ddbee0367/Banner_16.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731447", videoId: "1729225592", asset: "https://video.mn.co/assets/105351652/buy_stop_limit_order_with_gtc.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-1%EF%B8%8F%E2%83%A3-buy-stop-limit-orders-gtc" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
          {
            id: "buying-at-close",
            num: "2",
            title: "Buying at the Close (TOS)",
            description: "Executing end-of-day entries in Thinkorswim, step by step.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/474680cc-3fdc-4c9f-a7b1-b6c6a5b8ef84/Banner_17.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731448", videoId: "1749819888", asset: "https://video.mn.co/assets/132305255/buyingonclosetos.mp4", url: "https://friends.goatacademy.org/posts/academy-modules-2%EF%B8%8F%E2%83%A3-buying-at-the-close-tos" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
        ],
      },
    ],
  },

  {
    id: "risk-basics",
    tag: "RISK BASICS",
    title: "Trade Selection & Risk Basics",
    blurb: "What to buy, how much to buy, and how to protect the account.",
    mighty: { url: "https://friends.goatacademy.org/posts/academy-modules-%E2%9E%BD-risk-basics-trade-selection-risk-basics" },
    parts: [
      {
        id: "what-to-buy",
        tag: "PART 1 · WHAT TO BUY",
        title: "Setup Quality & Risk Fit",
        mighty: { url: "https://friends.goatacademy.org/posts/academy-modules-%E2%9E%A7-part-1-what-to-buy-setup-quality-risk-fit" },
        lessons: [
          {
            id: "what-to-buy-entry",
            num: "1",
            title: "What to Buy & Perfect Entry Point",
            description: "Filtering for quality setups and defining the perfect entry point before you commit capital.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/5426786e-c3ce-47a4-9c1b-fe9e538805ea/Banner_18.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731450", videoId: "1730068916", asset: "https://video.mn.co/assets/106355428/what_to_buy.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-1%EF%B8%8F%E2%83%A3-what-to-buy-perfect-entry-point" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
          {
            id: "position-sizing",
            num: "2",
            title: "Position Sizing & Portfolio Risk",
            description: "How much to buy: sizing positions so no single trade can hurt your portfolio.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/478d87cf-d90f-4472-8d1f-b3219560b13c/Banner_19.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731453", videoId: "1730053507", asset: "https://video.mn.co/assets/106340857/position_size.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-2%EF%B8%8F%E2%83%A3-position-sizing-portfolio-risk" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
        ],
      },
    ],
  },

  {
    id: "execution-practices",
    tag: "EXECUTION PRACTICES",
    title: "Exits, Rules & Discipline",
    blurb: "Taking profits, protecting capital and the DON'Ts that save accounts.",
    mighty: { url: "https://friends.goatacademy.org/posts/academy-modules-%E2%9E%BD-execution-practices-exits-rules-discipline" },
    parts: [
      {
        id: "selling",
        tag: "PART 1 · SELLING",
        title: "Exits, Profits & Rules",
        mighty: { url: "https://friends.goatacademy.org/posts/academy-modules-%E2%9E%A7-part-1-selling-exits-profits-rules" },
        lessons: [
          {
            id: "selling-profit-taking",
            num: "1",
            title: "Selling & Profit Taking",
            description: "The selling rules: taking profits without cutting winners short.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/d34e01a1-6f74-4f33-9e72-3e785910dabb/Banner_21.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731455", videoId: "1730068870", asset: "https://video.mn.co/assets/106355386/selling.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-1%EF%B8%8F%E2%83%A3-selling-profit-taking" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
          {
            id: "when-to-sell-investor",
            num: "2",
            title: "When to Sell For an Investor",
            description: "The investor exit strategy — plus the exit guide & workbook.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/3e469812-416d-4ea8-9941-49ba4e80e066/Banner_22.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731456", videoId: "1744708804", asset: "https://video.mn.co/assets/125432059/investors_when_to_sell.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-2%EF%B8%8F%E2%83%A3-when-to-sell-for-an-investor" },
            blocks: [
              { type: "video", provider: "mighty" },
              {
                type: "text",
                title: "Key Concepts",
                html: `
                  <h4>1 · Investor vs. Trader</h4>
                  <ul>
                    <li><strong>Trader</strong> — buys 100% of the position at the entry point.</li>
                    <li><strong>Investor</strong> — buys 50% of the position at the entry point and waits for a pullback before investing the remaining 50%.</li>
                  </ul>
                  <h4>2 · Entry Points</h4>
                  <ul>
                    <li><strong>Point A</strong> — the initial entry, where the investor buys the first 50%.</li>
                    <li><strong>Point B</strong> — the second entry after a pullback and breakout, where the investor buys the remaining 50%.</li>
                  </ul>`,
              },
              { type: "tool", label: "Investor Exit Strategy Guide & Workbook", kind: "Google Doc", url: "https://docs.google.com/document/d/1E6SYtOvMYoG_vUW1pjZpOvopvHlyW5GyASi5dtOb64o/edit?tab=t.0#heading=h.61sk7n8zjl17" },
            ],
          },
          {
            id: "trading-donts",
            num: "3",
            title: "Trading DON'Ts",
            description: "The mistakes that undo good trading — a checklist of what never to do.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/5b30d638-5e1f-4dc7-a960-1a2f6ace5629/Banner_24.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731458", videoId: "1730053139", asset: "https://video.mn.co/assets/106340572/donts.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-3%EF%B8%8F%E2%83%A3-trading-donts" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
        ],
      },
    ],
  },

  {
    id: "resources",
    tag: "RESOURCES",
    title: "Systems, Screening & Consistency",
    blurb: "The workbook, the checklists and the screeners that keep you consistent.",
    mighty: { url: "https://friends.goatacademy.org/posts/academy-modules-%E2%9E%BD-resources-systems-screening-consistency" },
    parts: [
      {
        id: "workbook-checklists",
        tag: "PART 1 · WORKBOOK & CHECKLISTS",
        title: "Workbook & Checklists",
        mighty: { url: "https://friends.goatacademy.org/posts/academy-modules-%E2%9E%A7-part-1-workbook-checklists" },
        lessons: [
          {
            id: "workbook",
            title: "Workbook",
            description: "Your trading workbook — capture every setup, decision and review in one place.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/e709ff31-232f-4cb6-b7bf-f6323cb71754/Screenshot_2024-10-28_010927.png?ixlib=rails-4.2.0&fm=jpg&q=75&auto=format&w=1400&h=1400&fit=max&impolicy=ResizeCrop&constraint=downsize&aspect=fit",
            mighty: { postId: "96731460", url: "https://friends.goatacademy.org/posts/academy-modules-workbook" },
            blocks: [
              { type: "text", html: `<p>The <strong>Wall Street Protocol Workbook</strong> is the written companion to the whole program — every pattern, rule and checklist in one place. Read it alongside the modules and bring it to your coaching calls. The highlights are below; the full workbook with Felix's chart sketches is in the Google Doc.</p>` },
              {
                type: "text",
                title: "The 4 Patterns",
                html: `
                  <p>There are four predictable patterns in the stock market:</p>
                  <ol>
                    <li><strong>Base Pattern ("Winston before a hike")</strong> — sideways movement that can last a while. Volume dries up, then spikes near the end as frustrated bag holders sell. The longer the base, the bigger the upside potential.</li>
                    <li><strong>Climbing Pattern ("Winston climbing")</strong> — upward movement, like a dog eagerly climbing a mountain. Typically faster than the base.</li>
                    <li><strong>Tired Pattern (top consolidation)</strong> — sideways movement at the top of the climb. A rest before the next move.</li>
                    <li><strong>"It's All Downhill From Here" Pattern</strong> — downward movement, usually faster than the climb up.</li>
                  </ol>`,
              },
              {
                type: "text",
                title: "When to Buy — Sector Breakout & 2nd Chance",
                html: `
                  <ul>
                    <li>The whole <strong>sector</strong> should be bullish and breaking out — not just the stock (use stockcharts.com).</li>
                    <li>Look for zigzag patterns, resistance zones and clear breakout points; enter as the stock exceeds previous highs.</li>
                    <li>Breakout volume should be <strong>2× or more</strong>; the stock should cross the 50-day moving average upward, with Mansfield Relative Strength confirming.</li>
                    <li>Never buy randomly mid-trend because you feel late — wait for clear breakout signals with volume confirmation.</li>
                  </ul>`,
              },
              {
                type: "text",
                title: "How to Buy — Buy Stop-Limit with GTC",
                html: `
                  <ul>
                    <li>Set a <strong>buy stop</strong> slightly above the previous high (e.g. $104 if the high was $103.50) so a real breakout triggers your entry.</li>
                    <li>Make it <strong>Good Till Cancelled</strong>, not a day order.</li>
                    <li>Use a <strong>stop-limit</strong>: triggers at your stop price but caps what you pay — set the limit 25–50 cents above the stop to stay protected against gap-ups while still getting filled.</li>
                    <li>Plan orders in advance (e.g. on Sunday) — less stress, no constant chart-watching.</li>
                  </ul>`,
              },
              {
                type: "text",
                title: "What to Buy + Perfect Entry Point",
                html: `
                  <ul>
                    <li><strong>Market first:</strong> follow the broad trend, never fight it; avoid entering after sharp drops.</li>
                    <li><strong>Overhead resistance:</strong> review a 2-year chart — heavy resistance and bagholders above the price are red flags; calculate the realistic gain to resistance and ask if it's worth it.</li>
                    <li><strong>Ideal setup:</strong> a long base (up to 2 years) with strong, increasing breakout volume.</li>
                    <li><strong>Bonus pattern:</strong> the inverse head &amp; shoulders — shakes out weak holders and breaks out on volume.</li>
                  </ul>`,
              },
              {
                type: "text",
                title: "Position Sizing & Portfolio Risk",
                html: `
                  <ul>
                    <li>Beginners / difficult markets: <strong>5–10% per position</strong>. Experienced traders in strong markets: up to 20–25%, only when market, sector, setup and volume all line up.</li>
                    <li>Keep total portfolio risk at <strong>1–2%</strong>: e.g. $100,000 × 1% = $1,000 max risk; a 10% position with a 6% stop risks just 0.6%.</li>
                    <li>Stop losses: standard <strong>4–6%</strong>, maximum 8%.</li>
                    <li>Reduce or stop trading in difficult months, choppy markets, corrections and bear markets.</li>
                  </ul>`,
              },
              {
                type: "text",
                title: "Selling & Stop Losses",
                html: `
                  <ul>
                    <li>Set the stop <strong>immediately</strong> when entering: just below the prior low, 4–6% below the breakout, or below the 150-day moving average.</li>
                    <li>Avoid round numbers — set stops ~1/8 below them (e.g. $8.87, not $9.00) and a few cents below support. Not too tight, or you get shaken out.</li>
                    <li><strong>Trailing:</strong> move the stop up under new higher lows only after price makes new highs.</li>
                    <li><strong>Advanced:</strong> draw a trend line across 3+ clear lows and set stops slightly below it; optionally split the position (tighter + wider stop). Adjust weekly, not daily.</li>
                  </ul>`,
              },
              {
                type: "text",
                title: "Trading DON'Ts",
                html: `
                  <ul>
                    <li>Never buy against the market or sector trend — no "gems" in bearish sectors.</li>
                    <li>Never try to guess bottoms because something looks cheap — wait for the breakout.</li>
                    <li>No stocks below (or with a declining) 50-day moving average, or with heavy overhead resistance.</li>
                    <li>Don't chase — avoid buying 8+ days after a breakout, and pass on weak-volume breakouts (you want 2×, ideally 4–6×).</li>
                  </ul>`,
              },
              { type: "tool", label: "Wall Street Protocol Workbook", kind: "Google Doc — full version with chart sketches", url: "https://docs.google.com/document/d/1FA7RZRRtc1ZPWgiF35XEMRNiwReUkB62P9uSmuFKjJI/edit?tab=t.0" },
            ],
          },
          {
            id: "wsp-checklist",
            title: "Wall Street Protocol Checklist",
            description: "The Wall Street Protocol checklist, explained line by line.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/7bb2b5be-2743-4156-895a-19c85c8865f8/Banner_26.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731462", videoId: "1730052078", asset: "https://video.mn.co/assets/106339558/wsp_checklist.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-wall-street-protocol-checklist" },
            blocks: [
              { type: "video", provider: "mighty" },
              { type: "tool", label: "Wall Street Protocol Checklist", kind: "Google Doc", url: "https://docs.google.com/document/d/1lgczVnWgGIoMSTCMhxj177OhqXGlZ_B3zdVd6ruFGTc/edit?usp=sharing" },
            ],
          },
          {
            id: "every-trade-checklist",
            title: "Check this for EVERY Trade",
            description: "The pre-trade checklist to run before every single entry. No exceptions.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/db8a4466-c617-4b71-8d1d-fdd1e5874a39/Screenshot_2024-10-28_054347.png?ixlib=rails-4.2.0&fm=jpg&q=75&auto=format&w=1400&h=1400&fit=max&impolicy=ResizeCrop&constraint=downsize&aspect=fit",
            mighty: { postId: "96731464", url: "https://friends.goatacademy.org/posts/academy-modules-check-this-for-every-trade" },
            blocks: [
              { type: "text", html: `<p>Before <em>any</em> order goes in, run <strong>The Wall Street Protocol Ultimate Checklist</strong>. It takes two minutes and it is the difference between trading a system and trading a feeling.</p>` },
              {
                type: "text",
                title: "Entry criteria — ALL must be true ✓",
                html: `
                  <p><strong>1 · Breakout confirmation</strong></p>
                  <ul>
                    <li>Price breaks above a clear resistance zone (3 or more highs), validated by multiple prior touches.</li>
                    <li>The breakout is clean and decisive — not choppy.</li>
                    <li>The sector is in an uptrend (never go against the industry trend).</li>
                  </ul>
                  <p><strong>2 · Moving average conditions</strong></p>
                  <ul>
                    <li>Price is above the 50-day MA, the 50-day MA slopes upward, and price is above the 150-day MA.</li>
                  </ul>
                  <p><strong>3 · Volume analysis</strong></p>
                  <ul>
                    <li>Breakout volume ≥ 2× the previous week's average: (today's volume ÷ 5-day average volume) ≥ 2.</li>
                  </ul>
                  <p><strong>4 · Mansfield Relative Strength</strong></p>
                  <ul>
                    <li>In an uptrend, or recently flipped from negative to positive.</li>
                  </ul>`,
              },
              {
                type: "text",
                title: "Exit rules — ANY one triggers a sale ⚠️",
                html: `
                  <p><strong>Initial stop loss</strong></p>
                  <ul>
                    <li>Set the stop just below the closest prior reaction low. No clear low? Take 4–6% below the breakout price, round down, and set the stop below the round number (e.g. for $10 → $9.75).</li>
                  </ul>
                  <p><strong>Trend line management</strong></p>
                  <ul>
                    <li>Once a trend line is confirmed by 3 clear points: move the stop to 1 point below the trend line for 50% of the position, keep the original stop for the other 50%.</li>
                  </ul>
                  <p><strong>Hard stop rules</strong></p>
                  <ul>
                    <li>Price below the 150-day MA → <strong>immediate sell</strong>.</li>
                    <li>Confirmed trend line breached → sell 50% of the position.</li>
                    <li>Original stop hit → sell the remaining position.</li>
                  </ul>`,
              },
              {
                type: "text",
                title: "Pre-trade & weekly routine",
                html: `
                  <p><strong>Before the trade:</strong> position size calculated (max 2% risk per trade), stop loss and profit target identified, risk:reward at least 2:1 — then screenshot the chart with marked levels, record entry and stop, note the volume confirmation and the Mansfield reading.</p>
                  <p><strong>Every week:</strong> still above the 50-day and 150-day MA? Trend line intact? Volume still showing institutional support? Update trailing and trend-line stops.</p>
                  <p><strong>The rules behind the rules:</strong> never average down on losers, don't fight the market trend, stick to the rules — no exceptions — and document every trade decision.</p>
                  <p><em>"Everyone is a genius until the market crashes…" — protection of capital is priority #1.</em></p>`,
              },
              { type: "tool", label: "The Wall Street Protocol Ultimate Checklist", kind: "Google Doc — printable checklist", url: "https://docs.google.com/document/d/1Pbc8L9LUcvDYuFTYHiAXYwACwYIXF8C_u6Ako431f8o/edit?tab=t.0#heading=h.babh6r5cd9uy" },
            ],
          },
        ],
      },
      {
        id: "trade-screener",
        tag: "PART 2 · YOUR TRADE SCREENER",
        title: "Your Trade Screener",
        mighty: { url: "https://friends.goatacademy.org/posts/academy-modules-%E2%9E%A7-part-2-your-trade-screener" },
        lessons: [
          {
            id: "screener-setup",
            title: "Your Trade Screener",
            description: "Build the TradingView screener that surfaces WSP-quality setups.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/fb6c0b08-61c5-4ccc-afe6-52f9e0b99935/Banner_28.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731466", videoId: "1731078653", asset: "https://video.mn.co/assets/107795723/tradingview_screener_tutorial.mp4", url: "https://friends.goatacademy.org/posts/academy-modules-your-trade-screener" },
            blocks: [
              { type: "video", provider: "mighty" },
              { type: "text", html: `<p><strong>Please note:</strong> when selecting Market Cap, instead of $10 Million it is best to enter <strong>$1 Billion</strong>. This gives better screener results focused on large-cap stocks.</p>` },
              { type: "tool", label: "TradingView Screener", kind: "External tool", url: "https://www.tradingview.com/screener/" },
            ],
          },
          {
            id: "continuation-screener",
            title: "Screener for Continuation Buys",
            description: "Tweak the screener to catch continuation buys above the 50 SMA in a bull market.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/30801588-e6de-42e4-98e8-75ee1b62d9c2/1733482267003.png?ixlib=rails-4.2.0&fm=jpg&q=75&auto=format&w=1400&h=1400&fit=max&impolicy=ResizeCrop&constraint=downsize&aspect=fit",
            mighty: { postId: "96731468", url: "https://friends.goatacademy.org/posts/academy-modules-screener-for-continuation-buys" },
            blocks: [
              {
                type: "text",
                html: `
                  <p>In a bull market there is an opportunity to buy stocks <em>after</em> the initial breakout above the 50-day moving average.</p>
                  <p>We look for exactly the same criteria — we are simply already above the 50 SMA. The only tweak to the screener is to change the crossover setting:</p>`,
              },
              { type: "image", src: "https://media1-production-mightynetworks.imgix.net/asset/4cebd0db-8ca5-4863-90a6-469ce60620ed/1733482364411.png?ixlib=rails-4.2.0&fm=jpg&q=75&auto=format&w=1400&h=1400&fit=max&impolicy=ResizeCrop&constraint=downsize&aspect=fit", caption: "Change the crossover…" },
              { type: "image", src: "https://media1-production-mightynetworks.imgix.net/asset/f1a5bed8-2ce5-4411-8057-bcfdb8dfdf42/1733482383037.png?ixlib=rails-4.2.0&fm=jpg&q=75&auto=format&w=1400&h=1400&fit=max&impolicy=ResizeCrop&constraint=downsize&aspect=fit", caption: "…to “Above”." },
              { type: "image", src: "https://media1-production-mightynetworks.imgix.net/asset/30801588-e6de-42e4-98e8-75ee1b62d9c2/1733482267003.png?ixlib=rails-4.2.0&fm=jpg&q=75&auto=format&w=1400&h=1400&fit=max&impolicy=ResizeCrop&constraint=downsize&aspect=fit", caption: "Your screener will now look like this." },
              {
                type: "text",
                html: `<p>This will give you a lot more results. If the list is super long, increase the <strong>Vol Change &gt; 80%</strong> filter to a larger number to focus on the moves with the most strength.</p>`,
              },
            ],
          },
        ],
      },
    ],
  },

  {
    id: "advanced",
    tag: "ADVANCED",
    title: "Advanced Risk & Optimization",
    blurb: "Protecting profits, letting winners run and managing the whole portfolio.",
    mighty: { url: "https://friends.goatacademy.org/posts/academy-modules-%E2%9E%BD-advanced-advanced-risk-optimization" },
    parts: [
      {
        id: "advanced-risk",
        tag: "PART 1 · ADVANCED STOP LOSS & PROFIT TAKING",
        title: "Advanced Stop Loss & Profit Taking",
        mighty: { postId: "96731469", url: "https://friends.goatacademy.org/posts/academy-modules-%E2%9E%A7-part-1-advanced-stop-loss-profit-taking" },
        lessons: [
          {
            id: "advanced-stop-loss",
            title: "Advanced Stop Loss & Profit Taking",
            description: "Advanced techniques for protecting profits and letting winners run.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/68925979-895f-406a-a03e-5266afa816e9/Banner_30.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731472", videoId: "1733231864", asset: "https://video.mn.co/assets/111101692/advanced_stop_loss_profit_taking.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-advanced-stop-loss-profit-taking-96731472" },
            blocks: [{ type: "video", provider: "mighty" }],
          },
          {
            id: "portfolio-management",
            title: "Portfolio, Risk & Position Sizing",
            description: "Deep-dive sessions on portfolio management, risk management and position sizing — plus the best tool for setting stop-losses.",
            thumb: null,
            mighty: { postId: "96731473", url: "https://friends.goatacademy.org/posts/academy-modules-portfolio-management-risk-management-position-sizing" },
            blocks: [
              { type: "video", provider: "fathom", title: "Portfolio management, risk management and position sizing", embed: "https://fathom.video/embed/ku4J8XvWjvJxYHH3L6Nx-ekYENWLrrDt?autoplay=0" },
              { type: "video", provider: "fathom", title: "The Best Tool for Setting Stop-Losses", embed: "https://fathom.video/embed/KcduUfh1dg2-1bcCjywAscsGUM3nFGZ4?autoplay=0" },
            ],
          },
        ],
      },
    ],
  },
];

/* ---------- derived helpers ---------- */

const ALL_LESSONS = [];
COURSE_SECTIONS.forEach((section) => {
  section.parts.forEach((part) => {
    part.lessons.forEach((lesson) => {
      lesson.sectionId = section.id;
      lesson.partId = part.id;
      lesson.sectionTag = section.tag;
      lesson.partTag = part.tag;
      lesson.partTitle = part.title;
      lesson.index = ALL_LESSONS.length;
      lesson.types = [...new Set(lesson.blocks.map((b) => (b.type === "image" ? "text" : b.type)))];
      ALL_LESSONS.push(lesson);
    });
  });
});

function lessonById(id) {
  return ALL_LESSONS.find((l) => l.id === id) || null;
}
