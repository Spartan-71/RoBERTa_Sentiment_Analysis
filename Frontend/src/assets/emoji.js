let allEmojis = [
  "😀",
  "😁",
  "😂",
  "😃",
  "😄",
  "😅",
  "😆",
  "😇",
  "😈",
  "👿",
  "😉",
  "😊",
  "☺️",
  "😋",
  "😌",
  "😍",
  "😎",
  "😏",
  "😐",
  "😑",
  "😒",
  "😓",
  "😔",
  "😕",
  "😖",
  "😗",
  "😘",
  "😙",
  "😚",
  "😛",
  "😜",
  "😝",
  "😞",
  "😟",
  "😠",
  "😡",
  "😢",
  "😣",
  "😤",
  "😥",
  "😦",
  "😧",
  "😨",
  "😩",
  "😪",
  "😫",
  "😬",
  "😭",
  "😮",
  "😯",
  "😰",
  "😱",
  "😲",
  "😳",
  "😴",
  "😵",
  "😶",
  "😷",
  "😸",
  "😹",
  "😺",
  "😻",
  "😼",
  "😽",
  "😾",
  "😿",
  "🙀",
];
//   "👣",
//   "👤",
//   "👥",
//   "👶",
//   "👶🏻",
//   "👶🏼",
//   "👶🏽",
//   "👶🏾",
//   "👶🏿",
//   "👦",
//   "👦🏻",
//   "👦🏼",
//   "👦🏽",
//   "👦🏾",
//   "👦🏿",
//   "👧",
//   "👧🏻",
//   "👧🏼",
//   "👧🏽",
//   "👧🏾",
//   "👧🏿",
//   "👨",
//   "👨🏻",
//   "👨🏼",
//   "👨🏽",
//   "👨🏾",
//   "👨🏿",
//   "👩",
//   "👩🏻",
//   "👩🏼",
//   "👩🏽",
//   "👩🏾",
//   "👩🏿",
//   "👪",
//   "👨‍👩‍👧",
//   "👨‍👩‍👧‍👦",
//   "👨‍👩‍👦‍👦",
//   "👨‍👩‍👧‍👧",
//   "👩‍👩‍👦",
//   "👩‍👩‍👧",
//   "👩‍👩‍👧‍👦",
//   "👩‍👩‍👦‍👦",
//   "👩‍👩‍👧‍👧",
//   "👨‍👨‍👦",
//   "👨‍👨‍👧",
//   "👨‍👨‍👧‍👦",
//   "👨‍👨‍👦‍👦",
//   "👨‍👨‍👧‍👧",
//   "👫",
//   "👬",
//   "👭",
//   "👯",
//   "👰",
//   "👰🏻",
//   "👰🏼",
//   "👰🏽",
//   "👰🏾",
//   "👰🏿",
//   "👱",
//   "👱🏻",
//   "👱🏼",
//   "👱🏽",
//   "👱🏾",
//   "👱🏿",
//   "👲",
//   "👲🏻",
//   "👲🏼",
//   "👲🏽",
//   "👲🏾",
//   "👲🏿",
//   "👳",
//   "👳🏻",
//   "👳🏼",
//   "👳🏽",
//   "👳🏾",
//   "👳🏿",
//   "👴",
//   "👴🏻",
//   "👴🏼",
//   "👴🏽",
//   "👴🏾",
//   "👴🏿",
//   "👵",
//   "👵🏻",
//   "👵🏼",
//   "👵🏽",
//   "👵🏾",
//   "👵🏿",
//   "👮",
//   "👮🏻",
//   "👮🏼",
//   "👮🏽",
//   "👮🏾",
//   "👮🏿",
//   "👷",
//   "👷🏻",
//   "👷🏼",
//   "👷🏽",
//   "👷🏾",
//   "👷🏿",
//   "👸",
//   "👸🏻",
//   "👸🏼",
//   "👸🏽",
//   "👸🏾",
//   "👸🏿",
//   "💂",
//   "💂🏻",
//   "💂🏼",
//   "💂🏽",
//   "💂🏾",
//   "💂🏿",
//   "👼",
//   "👼🏻",
//   "👼🏼",
//   "👼🏽",
//   "👼🏾",
//   "👼🏿",
//   "🎅",
//   "🎅🏻",
//   "🎅🏼",
//   "🎅🏽",
//   "🎅🏾",
//   "🎅🏿",
//   "👻",
//   "👹",
//   "👺",
//   "💩",
//   "💀",
//   "👽",
//   "👾",
//   "🙇",
//   "🙇🏻",
//   "🙇🏼",
//   "🙇🏽",
//   "🙇🏾",
//   "🙇🏿",
//   "💁",
//   "💁🏻",
//   "💁🏼",
//   "💁🏽",
//   "💁🏾",
//   "💁🏿",
//   "🙅",
//   "🙅🏻",
//   "🙅🏼",
//   "🙅🏽",
//   "🙅🏾",
//   "🙅🏿",
//   "🙆",
//   "🙆🏻",
//   "🙆🏼",
//   "🙆🏽",
//   "🙆🏾",
//   "🙆🏿",
//   "🙋",
//   "🙋🏻",
//   "🙋🏼",
//   "🙋🏽",
//   "🙋🏾",
//   "🙋🏿",
//   "🙎",
//   "🙎🏻",
//   "🙎🏼",
//   "🙎🏽",
//   "🙎🏾",
//   "🙎🏿",
//   "🙍",
//   "🙍🏻",
//   "🙍🏼",
//   "🙍🏽",
//   "🙍🏾",
//   "🙍🏿",
//   "💆",
//   "💆🏻",
//   "💆🏼",
//   "💆🏽",
//   "💆🏾",
//   "💆🏿",
//   "💇",
//   "💇🏻",
//   "💇🏼",
//   "💇🏽",
//   "💇🏾",
//   "💇🏿",
//   "💑",
//   "👩‍❤️‍👩",
//   "👨‍❤️‍👨",
//   "💏",
//   "👩‍❤️‍💋‍👩",
//   "👨‍❤️‍💋‍👨",
//   "🙌",
//   "🙌🏻",
//   "🙌🏼",
//   "🙌🏽",
//   "🙌🏾",
//   "🙌🏿",
//   "👏",
//   "👏🏻",
//   "👏🏼",
//   "👏🏽",
//   "👏🏾",
//   "👏🏿",
//   "👂",
//   "👂🏻",
//   "👂🏼",
//   "👂🏽",
//   "👂🏾",
//   "👂🏿",
//   "👀",
//   "👃",
//   "👃🏻",
//   "👃🏼",
//   "👃🏽",
//   "👃🏾",
//   "👃🏿",
//   "👄",
//   "💋",
//   "👅",
//   "💅",
//   "💅🏻",
//   "💅🏼",
//   "💅🏽",
//   "💅🏾",
//   "💅🏿",
//   "👋",
//   "👋🏻",
//   "👋🏼",
//   "👋🏽",
//   "👋🏾",
//   "👋🏿",
//   "👍",
//   "👍🏻",
//   "👍🏼",
//   "👍🏽",
//   "👍🏾",
//   "👍🏿",
//   "👎",
//   "👎🏻",
//   "👎🏼",
//   "👎🏽",
//   "👎🏾",
//   "👎🏿",
//   "☝",
//   "☝🏻",
//   "☝🏼",
//   "☝🏽",
//   "☝🏾",
//   "☝🏿",
//   "👆",
//   "👆🏻",
//   "👆🏼",
//   "👆🏽",
//   "👆🏾",
//   "👆🏿",
//   "👇",
//   "👇🏻",
//   "👇🏼",
//   "👇🏽",
//   "👇🏾",
//   "👇🏿",
//   "👈",
//   "👈🏻",
//   "👈🏼",
//   "👈🏽",
//   "👈🏾",
//   "👈🏿",
//   "👉",
//   "👉🏻",
//   "👉🏼",
//   "👉🏽",
//   "👉🏾",
//   "👉🏿",
//   "👌",
//   "👌🏻",
//   "👌🏼",
//   "👌🏽",
//   "👌🏾",
//   "👌🏿",
//   "✌",
//   "✌🏻",
//   "✌🏼",
//   "✌🏽",
//   "✌🏾",
//   "✌🏿",
//   "👊",
//   "👊🏻",
//   "👊🏼",
//   "👊🏽",
//   "👊🏾",
//   "👊🏿",
//   "✊",
//   "✊🏻",
//   "✊🏼",
//   "✊🏽",
//   "✊🏾",
//   "✊🏿",
//   "✋",
//   "✋🏻",
//   "✋🏼",
//   "✋🏽",
//   "✋🏾",
//   "✋🏿",
//   "💪",
//   "💪🏻",
//   "💪🏼",
//   "💪🏽",
//   "💪🏾",
//   "💪🏿",
//   "👐",
//   "👐🏻",
//   "👐🏼",
//   "👐🏽",
//   "👐🏾",
//   "👐🏿",
//   "🙏",
//   "🙏🏻",
//   "🙏🏼",
//   "🙏🏽",
//   "🙏🏾",
//   "🙏🏿",
//   "🌱",
//   "🌲",
//   "🌳",
//   "🌴",
//   "🌵",
//   "🌷",
//   "🌸",
//   "🌹",
//   "🌺",
//   "🌻",
//   "🌼",
//   "💐",
//   "🌾",
//   "🌿",
//   "🍀",
//   "🍁",
//   "🍂",
//   "🍃",
//   "🍄",
//   "🌰",
//   "🐀",
//   "🐁",
//   "🐭",
//   "🐹",
//   "🐂",
//   "🐃",
//   "🐄",
//   "🐮",
//   "🐅",
//   "🐆",
//   "🐯",
//   "🐇",
//   "🐰",
//   "🐈",
//   "🐱",
//   "🐎",
//   "🐴",
//   "🐏",
//   "🐑",
//   "🐐",
//   "🐓",
//   "🐔",
//   "🐤",
//   "🐣",
//   "🐥",
//   "🐦",
//   "🐧",
//   "🐘",
//   "🐪",
//   "🐫",
//   "🐗",
//   "🐖",
//   "🐷",
//   "🐽",
//   "🐕",
//   "🐩",
//   "🐶",
//   "🐺",
//   "🐻",
//   "🐨",
//   "🐼",
//   "🐵",
//   "🙈",
//   "🙉",
//   "🙊",
//   "🐒",
//   "🐉",
//   "🐲",
//   "🐊",
//   "🐍",
//   "🐢",
//   "🐸",
//   "🐋",
//   "🐳",
//   "🐬",
//   "🐙",
//   "🐟",
//   "🐠",
//   "🐡",
//   "🐚",
//   "🐌",
//   "🐛",
//   "🐜",
//   "🐝",
//   "🐞",
//   "🐾",
//   "⚡️",
//   "🔥",
//   "🌙",
//   "☀️",
//   "⛅️",
//   "☁️",
//   "💧",
//   "💦",
//   "☔️",
//   "💨",
//   "❄️",
//   "🌟",
//   "⭐️",
//   "🌠",
//   "🌄",
//   "🌅",
//   "🌈",
//   "🌊",
//   "🌋",
//   "🌌",
//   "🗻",
//   "🗾",
//   "🌐",
//   "🌍",
//   "🌎",
//   "🌏",
//   "🌑",
//   "🌒",
//   "🌓",
//   "🌔",
//   "🌕",
//   "🌖",
//   "🌗",
//   "🌘",
//   "🌚",
//   "🌝",
//   "🌛",
//   "🌜",
//   "🌞",
//   "🍅",
//   "🍆",
//   "🌽",
//   "🍠",
//   "🍇",
//   "🍈",
//   "🍉",
//   "🍊",
//   "🍋",
//   "🍌",
//   "🍍",
//   "🍎",
//   "🍏",
//   "🍐",
//   "🍑",
//   "🍒",
//   "🍓",
//   "🍔",
//   "🍕",
//   "🍖",
//   "🍗",
//   "🍘",
//   "🍙",
//   "🍚",
//   "🍛",
//   "🍜",
//   "🍝",
//   "🍞",
//   "🍟",
//   "🍡",
//   "🍢",
//   "🍣",
//   "🍤",
//   "🍥",
//   "🍦",
//   "🍧",
//   "🍨",
//   "🍩",
//   "🍪",
//   "🍫",
//   "🍬",
//   "🍭",
//   "🍮",
//   "🍯",
//   "🍰",
//   "🍱",
//   "🍲",
//   "🍳",
//   "🍴",
//   "🍵",
//   "☕️",
//   "🍶",
//   "🍷",
//   "🍸",
//   "🍹",
//   "🍺",
//   "🍻",
//   "🍼",
//   "🎀",
//   "🎁",
//   "🎂",
//   "🎃",
//   "🎄",
//   "🎋",
//   "🎍",
//   "🎑",
//   "🎆",
//   "🎇",
//   "🎉",
//   "🎊",
//   "🎈",
//   "💫",
//   "✨",
//   "💥",
//   "🎓",
//   "👑",
//   "🎎",
//   "🎏",
//   "🎐",
//   "🎌",
//   "🏮",
//   "💍",
//   "❤️",
//   "💔",
//   "💌",
//   "💕",
//   "💞",
//   "💓",
//   "💗",
//   "💖",
//   "💘",
//   "💝",
//   "💟",
//   "💜",
//   "💛",
//   "💚",
//   "💙",
//   "🏃",
//   "🏃🏻",
//   "🏃🏼",
//   "🏃🏽",
//   "🏃🏾",
//   "🏃🏿",
//   "🚶",
//   "🚶🏻",
//   "🚶🏼",
//   "🚶🏽",
//   "🚶🏾",
//   "🚶🏿",
//   "💃",
//   "💃🏻",
//   "💃🏼",
//   "💃🏽",
//   "💃🏾",
//   "💃🏿",
//   "🚣",
//   "🚣🏻",
//   "🚣🏼",
//   "🚣🏽",
//   "🚣🏾",
//   "🚣🏿",
//   "🏊",
//   "🏊🏻",
//   "🏊🏼",
//   "🏊🏽",
//   "🏊🏾",
//   "🏊🏿",
//   "🏄",
//   "🏄🏻",
//   "🏄🏼",
//   "🏄🏽",
//   "🏄🏾",
//   "🏄🏿",
//   "🛀",
//   "🛀🏻",
//   "🛀🏼",
//   "🛀🏽",
//   "🛀🏾",
//   "🛀🏿",
//   "🏂",
//   "🎿",
//   "⛄️",
//   "🚴",
//   "🚴🏻",
//   "🚴🏼",
//   "🚴🏽",
//   "🚴🏾",
//   "🚴🏿",
//   "🚵",
//   "🚵🏻",
//   "🚵🏼",
//   "🚵🏽",
//   "🚵🏾",
//   "🚵🏿",
//   "🏇",
//   "🏇🏻",
//   "🏇🏼",
//   "🏇🏽",
//   "🏇🏾",
//   "🏇🏿",
//   "⛺️",
//   "🎣",
//   "⚽️",
//   "🏀",
//   "🏈",
//   "⚾️",
//   "🎾",
//   "🏉",
//   "⛳️",
//   "🏆",
//   "🎽",
//   "🏁",
//   "🎹",
//   "🎸",
//   "🎻",
//   "🎷",
//   "🎺",
//   "🎵",
//   "🎶",
//   "🎼",
//   "🎧",
//   "🎤",
//   "🎭",
//   "🎫",
//   "🎩",
//   "🎪",
//   "🎬",
//   "🎨",
//   "🎯",
//   "🎱",
//   "🎳",
//   "🎰",
//   "🎲",
//   "🎮",
//   "🎴",
//   "🃏",
//   "🀄️",
//   "🎠",
//   "🎡",
//   "🎢",
//   "🚃",
//   "🚞",
//   "🚂",
//   "🚋",
//   "🚝",
//   "🚄",
//   "🚅",
//   "🚆",
//   "🚇",
//   "🚈",
//   "🚉",
//   "🚊",
//   "🚌",
//   "🚍",
//   "🚎",
//   "🚐",
//   "🚑",
//   "🚒",
//   "🚓",
//   "🚔",
//   "🚨",
//   "🚕",
//   "🚖",
//   "🚗",
//   "🚘",
//   "🚙",
//   "🚚",
//   "🚛",
//   "🚜",
//   "🚲",
//   "🚏",
//   "⛽️",
//   "🚧",
//   "🚦",
//   "🚥",
//   "🚀",
//   "🚁",
//   "✈️",
//   "💺",
//   "⚓️",
//   "🚢",
//   "🚤",
//   "⛵️",
//   "🚡",
//   "🚠",
//   "🚟",
//   "🛂",
//   "🛃",
//   "🛄",
//   "🛅",
//   "💴",
//   "💶",
//   "💷",
//   "💵",
//   "🗽",
//   "🗿",
//   "🌁",
//   "🗼",
//   "⛲️",
//   "🏰",
//   "🏯",
//   "🌇",
//   "🌆",
//   "🌃",
//   "🌉",
//   "🏠",
//   "🏡",
//   "🏢",
//   "🏬",
//   "🏭",
//   "🏣",
//   "🏤",
//   "🏥",
//   "🏦",
//   "🏨",
//   "🏩",
//   "💒",
//   "⛪️",
//   "🏪",
//   "🏫",
//   "💻",
//   "⏰",
//   "⏳",
//   "⌛️",
//   "📷",
//   "📹",
//   "🎥",
//   "📺",
//   "📻",
//   "📟",
//   "📞",
//   "☎️",
//   "📠",
//   "💽",
//   "💾",
//   "💿",
//   "📀",
//   "📼",
//   "🔋",
//   "🔌",
//   "💡",
//   "🔦",
//   "📡",
//   "💳",
//   "💸",
//   "💰",
//   "💎",
//   "🌂",
//   "👝",
//   "👛",
//   "👜",
//   "💼",
//   "🎒",
//   "💄",
//   "👓",
//   "👒",
//   "👡",
//   "👠",
//   "👢",
//   "👞",
//   "👟",
//   "👙",
//   "👗",
//   "👘",
//   "👚",
//   "👕",
//   "👔",
//   "👖",
//   "🚪",
//   "🚿",
//   "🛁",
//   "🚽",
//   "💈",
//   "💉",
//   "💊",
//   "🔬",
//   "🔭",
//   "🔮",
//   "🔧",
//   "🔪",
//   "🔩",
//   "🔨",
//   "💣",
//   "🚬",
//   "🔫",
//   "🔖",
//   "📰",
//   "🔑",
//   "✉️",
//   "📩",
//   "📨",
//   "📧",
//   "📥",
//   "📤",
//   "📦",
//   "📯",
//   "📮",
//   "📪",
//   "📫",
//   "📬",
//   "📭",
//   "📄",
//   "📃",
//   "📑",
//   "📈",
//   "📉",
//   "📊",
//   "📅",
//   "📆",
//   "🔅",
//   "🔆",
//   "📜",
//   "📋",
//   "📖",
//   "📓",
//   "📔",
//   "📒",
//   "📕",
//   "📗",
//   "📘",
//   "📙",
//   "📚",
//   "📇",
//   "🔗",
//   "📎",
//   "📌",
//   "✂️",
//   "📐",
//   "📍",
//   "📏",
//   "🚩",
//   "📁",
//   "📂",
//   "✒️",
//   "✏️",
//   "📝",
// ];

export default allEmojis;