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
            blocks: [
              { type: "video", provider: "mighty" },
              {
                type: "text",
                title: "Key concepts from the Workbook",
                html: `
                  <p>There are <strong>four predictable patterns</strong> in the stock market — every chart you will ever look at lives in one of them:</p>
                  <ol>
                    <li><strong>Base Pattern</strong> ("Winston before a hike") — sideways movement.</li>
                    <li><strong>Climbing Pattern</strong> ("Winston climbing") — upward movement.</li>
                    <li><strong>Tired Pattern</strong> (top consolidation) — sideways at the top of the climb.</li>
                    <li><strong>"It's All Downhill From Here" Pattern</strong> — downward movement.</li>
                  </ol>
                  <p>The next four lessons take them one by one — learn to name the pattern before you trade the chart.</p>`,
              },
            ],
          },
          {
            id: "base-pattern",
            num: "2",
            title: "Base Pattern",
            description: "Sideways consolidation — the launchpad. How to spot a base and what it tells you about what comes next.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/ccf6a82a-ed87-45e6-a5e8-ca8f703ae8d9/Banner_10.jpg?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731436", videoId: "1729223682", asset: "https://video.mn.co/assets/105350101/base_pattern.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-2%EF%B8%8F%E2%83%A3-base-pattern" },
            blocks: [
              { type: "video", provider: "mighty" },
              {
                type: "text",
                title: "Key concepts from the Workbook",
                html: `
                  <p><strong>Base Pattern ("Winston before a hike")</strong> — think of Winston on the beach with his tummy in shallow water: he is going to sit there for a while and cool down.</p>
                  <ul>
                    <li>Represented by a <strong>sideways movement</strong> in the stock chart — and it can last for a while.</li>
                    <li>Volume starts to dry up, then <strong>spikes near the end</strong> of the base as disgruntled bag holders get frustrated and sell.</li>
                    <li><strong>The longer the base, the bigger the upside potential.</strong></li>
                  </ul>`,
              },
            ],
          },
          {
            id: "climbing-pattern",
            num: "3",
            title: "Climbing Pattern",
            description: "The uptrend. Riding strength above the 50 SMA and knowing when the climb is healthy.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/37d8d08c-defd-4687-8461-e3d4f03bd911/Banner_11.jpg?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731438", videoId: "1729223815", asset: "https://video.mn.co/assets/105350195/climbing_pattern.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-3%EF%B8%8F%E2%83%A3-climbing-pattern" },
            blocks: [
              { type: "video", provider: "mighty" },
              {
                type: "text",
                title: "Key concepts from the Workbook",
                html: `
                  <p><strong>Climbing Pattern ("Winston climbing")</strong></p>
                  <ul>
                    <li>Represented by an <strong>upward movement</strong> in the stock chart — like a dog eagerly climbing up a mountain.</li>
                    <li>Typically <strong>faster than the base pattern</strong>.</li>
                  </ul>`,
              },
            ],
          },
          {
            id: "tired-pattern",
            num: "4",
            title: "Tired Pattern",
            description: "Momentum fading. The warning signs that a climb is running out of fuel.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/751dab88-a1e8-49ad-b437-3ddac845a496/Banner_12.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731439", videoId: "1729223895", asset: "https://video.mn.co/assets/105350272/tired_pattern.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-4%EF%B8%8F%E2%83%A3-tired-pattern" },
            blocks: [
              { type: "video", provider: "mighty" },
              {
                type: "text",
                title: "Key concepts from the Workbook",
                html: `
                  <p><strong>Tired Pattern (or Top Consolidation Pattern)</strong></p>
                  <ul>
                    <li>Represented by <strong>sideways movement at the top of the climb</strong> — like a dog resting in a water-filled hole near the top of the mountain.</li>
                    <li>A period of <strong>consolidation before the next move</strong>.</li>
                  </ul>`,
              },
            ],
          },
          {
            id: "downhill-pattern",
            num: "5",
            title: "Downhill Pattern",
            description: "The downtrend. Why cash is a position — and how to stay out of falling markets.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/dc70a3b9-14c0-4898-b115-b9e711dea2de/Banner_13.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731441", videoId: "1729224223", asset: "https://video.mn.co/assets/105350566/downhill_pattern.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-5%EF%B8%8F%E2%83%A3-downhill-pattern" },
            blocks: [
              { type: "video", provider: "mighty" },
              {
                type: "text",
                title: "Key concepts from the Workbook",
                html: `
                  <p><strong>"It's All Downhill From Here" Pattern</strong></p>
                  <ul>
                    <li>Represented by a <strong>downward movement</strong> in the stock chart — like a dog running quickly downhill.</li>
                    <li>Usually <strong>faster than the upward climb</strong>.</li>
                  </ul>`,
              },
            ],
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
            blocks: [
              { type: "video", provider: "mighty" },
              {
                type: "text",
                title: "Key concepts from the Workbook",
                html: `
                  <ul>
                    <li><strong>Sector analysis</strong> — look at the entire sector, not just individual stocks. The whole sector should be bullish and breaking out (use tools like stockcharts.com).</li>
                    <li><strong>Chart patterns</strong> — look for "zigzag" patterns with multiple highs and lows; identify resistance zones and breakout points.</li>
                    <li><strong>Entry points</strong> — enter as the stock exceeds previous highs and breaks above resistance.</li>
                    <li><strong>Volume</strong> — should increase significantly during breakouts, <strong>2× or more</strong>. High volume confirms the breakout's strength.</li>
                    <li><strong>Moving averages</strong> — the stock should cross the 50-day moving average upward.</li>
                    <li><strong>Mansfield Relative Strength</strong> — use the reading to confirm breakout strength.</li>
                    <li><strong>Avoid random entries</strong> — don't buy mid-trend because you feel late; wait for clear breakout signals with volume confirmation.</li>
                    <li><strong>Continuous analysis</strong> — keep reviewing sectors and stocks; be patient and wait for proper setups rather than forcing trades.</li>
                  </ul>`,
              },
            ],
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
            blocks: [
              { type: "video", provider: "mighty" },
              {
                type: "text",
                title: "Key concepts from the Workbook",
                html: `
                  <ul>
                    <li><strong>Buy stop order</strong> — instead of watching the chart all day, set an order that triggers automatically when price reaches your level. Place it slightly above the previous high (e.g. $104 if the high was $103.50) so you catch a meaningful breakout, not a slight touch of resistance.</li>
                    <li><strong>Good Till Cancelled (GTC)</strong> — use GTC instead of a day order so it stays active until you cancel it.</li>
                    <li><strong>Stop-limit order</strong> — the advanced combination: triggers at your stop price but also caps the maximum you're willing to pay, protecting you from unexpected price jumps.</li>
                    <li><strong>Limit price</strong> — set it 25–50 cents above the stop price: likely to fill, still protected from big unfavorable moves.</li>
                    <li><strong>Plan ahead</strong> — set up your orders in advance (e.g. on a Sunday) for the coming week. Less stress, no constant monitoring.</li>
                    <li><strong>Tools</strong> — Webull is very easy to use; most brokers offer the same functionality.</li>
                  </ul>`,
              },
            ],
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
            blocks: [
              { type: "video", provider: "mighty" },
              {
                type: "text",
                title: "Key concepts from the Workbook",
                html: `
                  <h4>1 · Market & sector first</h4>
                  <ul>
                    <li>Check the overall market direction (S&amp;P 500, NASDAQ); avoid entering after significant drops and follow momentum — the broad market should be in an uptrend.</li>
                    <li>Track sectors with stockcharts.com and the Dow Jones industry segments; watch the 50-day moving average.</li>
                  </ul>
                  <h4>2 · Overhead resistance</h4>
                  <ul>
                    <li>Review 2 years of chart history, identify resistance levels, and calculate the potential gain to resistance.</li>
                    <li><strong>Red flags:</strong> heavy overhead resistance, many "bagholders" at higher prices, limited upside, recent high-volume trading above the current price.</li>
                  </ul>
                  <h4>3 · The ideal setup</h4>
                  <ul>
                    <li>Longer bases are better — up to 2 years of sideways base building; price exhaustion means sellers are depleted.</li>
                    <li>Volume must confirm: strong breakout volume and an increasing trend.</li>
                    <li><strong>Bonus pattern — inverse head &amp; shoulders:</strong> left shoulder, lower head, right shoulder, clear neckline, high-volume breakout. It shakes out weak holders and its popularity creates momentum.</li>
                  </ul>
                  <h4>4 · Is it worth it?</h4>
                  <ul>
                    <li>Example: price $11–12, resistance $14–15 → potential gain ~20%. Ask: is 20% enough? Are better setups available? What's the risk:reward?</li>
                  </ul>
                  <h4>The rules</h4>
                  <ul>
                    <li>Don't fight the market trend · avoid heavy resistance · look for clean breakouts · consider historical price action · wait for proper setups.</li>
                  </ul>`,
              },
            ],
          },
          {
            id: "position-sizing",
            num: "2",
            title: "Position Sizing & Portfolio Risk",
            description: "How much to buy: sizing positions so no single trade can hurt your portfolio.",
            thumb: "https://media1-production-mightynetworks.imgix.net/asset/478d87cf-d90f-4472-8d1f-b3219560b13c/Banner_19.png?ixlib=rails-4.3.1&fm=jpg&q=75&auto=format",
            mighty: { postId: "96731453", videoId: "1730053507", asset: "https://video.mn.co/assets/106340857/position_size.mkv", url: "https://friends.goatacademy.org/posts/academy-modules-2%EF%B8%8F%E2%83%A3-position-sizing-portfolio-risk" },
            blocks: [
              { type: "video", provider: "mighty" },
              {
                type: "text",
                title: "Key concepts from the Workbook",
                html: `
                  <h4>Position size guidelines</h4>
                  <ul>
                    <li><strong>Beginners / difficult markets:</strong> 5–10% per stock (even just 5%). Smaller positions keep emotions manageable — stability over gains.</li>
                    <li><strong>Experienced traders in strong markets:</strong> up to 20–25% per trade, but only when everything lines up — market trending up, sector trending up, clean setup, strong volume, clear technical pattern.</li>
                  </ul>
                  <h4>Portfolio risk parameters</h4>
                  <ul>
                    <li>Aim for <strong>1–2% total portfolio risk</strong>. Example: $100,000 × 1% = $1,000 max risk; a 10% position ($10,000) with a 6% stop = $600 risk = 0.6% of the portfolio.</li>
                    <li><strong>Stop losses:</strong> minimum 4%, standard 4–6%, maximum 8% — adjust to the chart and market conditions.</li>
                  </ul>
                  <h4>When to reduce or avoid trading</h4>
                  <ul>
                    <li>Difficult months (e.g. September), choppy or sideways markets, corrections, bear markets, or whenever market direction is unclear.</li>
                  </ul>`,
              },
            ],
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
            blocks: [
              { type: "video", provider: "mighty" },
              {
                type: "text",
                title: "Key concepts from the Workbook",
                html: `
                  <h4>Basic rules for stop losses</h4>
                  <ul>
                    <li>Set the stop loss <strong>immediately</strong> when entering a trade.</li>
                    <li>Initial placement: just below the prior low · 4–6% below the breakout price if there's no recent low · below the 150-day moving average.</li>
                  </ul>
                  <h4>Placement tips</h4>
                  <ul>
                    <li>Avoid round numbers — they act as support/resistance. Set stops ~1/8 below them (e.g. $8.87, not $9.00), and a few cents below support levels.</li>
                    <li>Don't set stops too tight, or you'll get shaken out.</li>
                  </ul>
                  <h4>Moving stops up (trailing)</h4>
                  <ul>
                    <li><strong>Basic method:</strong> move the stop up to below recent lows when price makes new highs and clear higher lows form. Never move it up if price hasn't exceeded the recent high.</li>
                    <li><strong>Advanced method (trend line):</strong> draw a trend line through at least 3 clear lows and set stops slightly below it. Optionally split the position — first half with a tighter stop near the trend line, second half wider below major support. Adjust weekly, not daily.</li>
                  </ul>`,
              },
            ],
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
            blocks: [
              { type: "video", provider: "mighty" },
              {
                type: "text",
                title: "Key concepts from the Workbook",
                html: `
                  <ol>
                    <li><strong>Never buy against market trends</strong> — don't buy a strong stock in a declining sector; no "swimming against the current".</li>
                    <li><strong>Avoid underperforming sectors</strong> — don't hunt for "gems" in bearish sectors; the sector will drag even good stocks down.</li>
                    <li><strong>Never try to guess market bottoms</strong> — "cheap" after a collapse is not a signal; wait for the breakout pattern.</li>
                    <li><strong>Technical rules</strong> — no stocks below the 50-day moving average, no declining 50-day MA, no heavy overhead resistance.</li>
                    <li><strong>Timing &amp; volume</strong> — don't chase 8+ days after a breakout, and pass on weak-volume breakouts. You want at least 2× normal volume; 4–6× is ideal.</li>
                  </ol>`,
              },
            ],
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

/* ---------- interim video hosting: Google Drive ----------
   The original course videos live in this shared Drive folder,
   which is ALSO the developer handoff package:
   https://drive.google.com/drive/folders/1mNmHSScoiJKgPukpi0g6rnPQjTh4jI87

   PRODUCTION (tech team): relocate these files to the final video
   host (Bunny / Vimeo / Mux — gives domain locking + end-of-video
   completion events) and swap the fileId entries below for the new
   embed URLs, or wire native Mighty playback via lesson.mighty.*.
   Removing a lesson's entry here falls back to opening its Mighty
   post. */
const GDRIVE_VIDEOS = {
  "market-crashes": "1jYv8gjHOtTNyG9mbzkX6i9u2heNRxMvS",
  "busy-fools": "1ehs3e4z0TYf3uGYawqiyw32tBIp5Es6B",
  "ibkr-registration": "1HUKAmV3X3--3a8g3yROB-gd7w53WdrKf",
  "thinkorswim-help": "1MnfA8p_LVQEnNQzkP8bkI2cQ-AlsiiB-",
  "tradevision-setup": "1zwiy6sj0sXXaU5E0XDv0vOd1HxLFp-LB",
  "pattern-overview": "1h2pcIWDBlPicLRDkhYn2Duzewu6lVwkE",
  "base-pattern": "1LZpNxoNm22em8GabBdQjr5pSW8ZMmbru",
  "climbing-pattern": "1P3lEAieU8hJfh8k_aKXOlhtaZsbjprpo",
  "tired-pattern": "1IUZ2HiVN8dNxkyhWGx1T4ll0JY097JQj",
  "downhill-pattern": "1a_IoECVRggjxbc9Kn9TZ3V7XKnXFHfnW",
  "sector-breakouts": "1auPOCnrUUMttZ2WT1DDuIzKJ6vy_r_VZ",
  "when-to-buy-investors": "1E2Fa0BsxUwM2QpGtih_qlnhJBRjMknlp",
  "buy-stop-limit": "1AQpHHldtuiDta30cWt8EZygD2FlgJ6Hb",
  "buying-at-close": "1Jr4931sd3-iUsZqBUR-27hgpyqE8sGW7",
  "what-to-buy-entry": "1YBm4r-o_LKFBdAg94Pv7N2vhhdU0zLFT",
  "position-sizing": "1NnsLyVDcCADuTk39e0qA5-ggFtpfG5-u",
  "selling-profit-taking": "1VEMQqpFck6OiEQSTHOBPjPRkMZlJU0tL",
  "when-to-sell-investor": "1vXSYxVLcrywQGQPOfTlFSdOeS5q_h-Sy",
  "trading-donts": "1iLV6_6G3PKimIaj5luz4K7zrfTdMXplt",
  "wsp-checklist": "1lEdsQPHP3gHOpHaa11T1wVLrTIXGROq8",
  "screener-setup": "1u3xHBIWgXozkZTMh7Qn9VMhveI6Om1NG",
  "advanced-stop-loss": "1YK8YN1FqV76uEEXMH16ozgxlfE6UmsBG",
};

/* ---------- production video hosting: Wistia ----------
   lesson id → Wistia media id. Takes precedence over GDRIVE_VIDEOS
   above, so a lesson listed here plays from Wistia and the Drive entry
   stays only as an archival fallback. Wistia gives domain locking and
   real playback events, so this is where the tech team should hook
   end-of-video completion (see the note on markWatched in app.js). */
const WISTIA_VIDEOS = {
  "market-crashes": "jy6flhkci6",
  "busy-fools": "eeemnfe6e9",
  "ibkr-registration": "9bn3jop9yy",
  "thinkorswim-help": "8lgc3hgvuo",
  "tradevision-setup": "gr2z8unnb2",
  "pattern-overview": "n8smlxsdis",
  "base-pattern": "rvg7z0245d",
  "climbing-pattern": "x2i4sradt9",
  "tired-pattern": "bvdf47if97",
  "downhill-pattern": "86l6ie9o1o",
  "sector-breakouts": "9xl2sgkwax",
  "when-to-buy-investors": "86p9ka8xpx",
  "buy-stop-limit": "uvdpbrn3hu",
  "buying-at-close": "gjket9ui6v",
  "what-to-buy-entry": "9lm8p1a0b5",
  "position-sizing": "1a8jlpysan",
  "selling-profit-taking": "j0ylaqjpez",
  "when-to-sell-investor": "q090pfioyw",
  "trading-donts": "8qcikrfewg",
  "wsp-checklist": "1d9cwsztzj",
  "screener-setup": "6sga6vxsj1",
  "advanced-stop-loss": "rxl4pyfzj0",
  "portfolio-management": "jujp0v8vl6",
};

/* Custom lesson thumbnails (player posters), hosted in the shared
   Drive folder https://drive.google.com/drive/folders/1mBDSC7MD2kvO79MGt1jCnxL45HoPmpnh
   Relocate together with the videos for production. */
const GDRIVE_THUMBS = {
  "market-crashes": "1dzv_03yEJuxvN99OQp7Y04xK3OKjUC5M",
  "busy-fools": "1ZI-Z8tDlmbqECAgqUj-rK9bftJPh_m_b",
  "ibkr-registration": "1CqRPZjCjXvozk7bdp7Omntz8RtBn0Bwy",
  "thinkorswim-help": "1OLbExxAeSYQ7NGJXMMjNO7GOnuNXS2ts",
  "tradevision-setup": "1b3gS8-GnUeLBxnbB4FtJGZs9PmLBpCV_",
  "pattern-overview": "1p7PK5HAgfUTfBzglEGnAx2nEaM2pqcuh",
  "base-pattern": "1Iym_ri5gy-xg6RdkivVNoMoz0C31ozaE",
  "climbing-pattern": "11zmfaNoim2wOkF38tnXoNp5_TgvZY6qg",
  "tired-pattern": "1B2lyK9yjB8aYZ4iqNRpKjtNqxEO5beGL",
  "downhill-pattern": "1nGoXZtece77DZMHNHADOi-Gq1al5lxwf",
  "sector-breakouts": "1x9Xh9y5KzxkcTYRy9bBtrv5dZ_0Rzzuj",
  "when-to-buy-investors": "1kVhJaStksyAqHcfrZSbq-56g4L81Fw2N",
  "buy-stop-limit": "1w72nNX5OiuErqA6rgmVbyStpUUAWnDVi",
  "buying-at-close": "1XNzaIFxfEODc5pRvA9yJuo2YJvZoFT0g",
  "what-to-buy-entry": "17fCSPjtpdYgRy-wqyx3OWDA5gqM8MDEv",
  "position-sizing": "1F-vuWzvq2mbDU8XRoSnJ75NcjexSVYA5",
  "selling-profit-taking": "1qxg7IQjTaGsXi_TQonhAmdPapXNGj0u5",
  "when-to-sell-investor": "1UDCbpmdrMMsnOdC6QiLaHWBlPZtpiXxI",
  "trading-donts": "1-Btqz6UMuAQwysWBX2KGgKBUaYzbiVN5",
  "workbook": "1_djLrjMdTu7bWdbPz7LWBwNTyOzssPlb",
  "wsp-checklist": "1OzSmS3dsVdKDCjCHLrlnR6anS1Hzinq1",
  "every-trade-checklist": "1hxK8u51maCSqW2niQhsDP_Xyy1ZBMTMg",
  "screener-setup": "1LAyhWR0-bpLQbT0yVNEY2OV-3uwr6KJE",
  "continuation-screener": "1wgtoRrXSS5SI6ZqbCdwxXk5wNU1oGZ1j",
  "advanced-stop-loss": "15qXjssMm3QQR-H1IzgI2Rjt71_ROonAl",
  "portfolio-management": "1YFrS0D4zrc-Se1NH-WXsLNsIFdgVcYbE",
};

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
      lesson.blocks.forEach((b) => {
        if (b.type !== "video" || b.provider !== "mighty") return;
        if (WISTIA_VIDEOS[lesson.id]) {
          b.provider = "wistia";
          b.mediaId = WISTIA_VIDEOS[lesson.id];
        } else if (GDRIVE_VIDEOS[lesson.id]) {
          b.provider = "gdrive";
          b.fileId = GDRIVE_VIDEOS[lesson.id];
        }
      });
      /* a lesson whose videos all come from another host (the Fathom
         sessions) still gets its Wistia recording — first, so it leads
         the player pane and the rest fall through to the extras row */
      if (WISTIA_VIDEOS[lesson.id] && !lesson.blocks.some((b) => b.provider === "wistia")) {
        lesson.blocks.unshift({ type: "video", provider: "wistia", mediaId: WISTIA_VIDEOS[lesson.id] });
      }
      /* after the block edits above, so a lesson that gains its first
         video from Wistia is still tagged as a video lesson */
      lesson.types = [...new Set(lesson.blocks.map((b) => (b.type === "image" ? "text" : b.type)))];
      if (GDRIVE_THUMBS[lesson.id]) {
        lesson.thumb = "https://drive.google.com/thumbnail?id=" + GDRIVE_THUMBS[lesson.id] + "&sz=w1280";
        lesson.customThumb = true; /* custom artwork also shows on the lesson cards */
      }
      ALL_LESSONS.push(lesson);
    });
  });
});

function lessonById(id) {
  return ALL_LESSONS.find((l) => l.id === id) || null;
}
