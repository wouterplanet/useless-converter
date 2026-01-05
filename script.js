// Collection of funny comparison objects
const comparisons = [
    {
        name: "Samsung Smart Fridges",
        height: 1.78,
        emoji: "🧊",
        preposition: "stacked on top of each other"
    },
    {
        name: "Eiffel Towers",
        height: 330,
        emoji: "🗼",
        preposition: "stacked vertically"
    },
    {
        name: "average giraffes",
        height: 5.5,
        emoji: "🦒",
        preposition: "standing on each other's heads"
    },
    {
        name: "standard bananas",
        height: 0.18,
        emoji: "🍌",
        preposition: "lined up end to end"
    },
    {
        name: "double-decker buses",
        height: 4.4,
        emoji: "🚌",
        preposition: "stacked vertically (somehow)"
    },
    {
        name: "average golden retrievers",
        height: 0.6,
        emoji: "🐕",
        preposition: "standing on each other"
    },
    {
        name: "Statue of Liberty monuments",
        height: 93,
        emoji: "🗽",
        preposition: "from base to torch"
    },
    {
        name: "Big Ben clock towers",
        height: 96,
        emoji: "🕰️",
        preposition: "stacked somehow"
    },
    {
        name: "standard pencils",
        height: 0.19,
        emoji: "✏️",
        preposition: "laid end to end"
    },
    {
        name: "average T-Rex dinosaurs",
        height: 4,
        emoji: "🦖",
        preposition: "standing tall"
    },
    {
        name: "pizza boxes",
        height: 0.05,
        emoji: "🍕",
        preposition: "stacked up"
    },
    {
        name: "Empire State Buildings",
        height: 443,
        emoji: "🏢",
        preposition: "including the antenna"
    },
    {
        name: "washing machines",
        height: 0.85,
        emoji: "🧺",
        preposition: "stacked precariously"
    },
    {
        name: "average adult humans",
        height: 1.7,
        emoji: "🧍",
        preposition: "standing in a human tower"
    },
    {
        name: "tennis balls",
        height: 0.067,
        emoji: "🎾",
        preposition: "stacked in a tower"
    },
    {
        name: "lightsabers (fully extended, not ignited)",
        height: 1.0,
        emoji: "⚔️",
        preposition: "lined up end to end"
    },
    {
        name: "garden gnomes on each other's shoulders",
        height: 0.3,
        emoji: "🧙",
        preposition: "stacked up"
    },
    {
        name: "blue whales (lying down, of course)",
        height: 25,
        emoji: "🐋",
        preposition: "lined up nose to tail"
    },
    {
        name: "penguins wearing top hats",
        height: 0.9,
        emoji: "🐧",
        preposition: "standing on each other"
    },
    {
        name: "Starbucks venti cups stacked precariously",
        height: 0.2,
        emoji: "☕",
        preposition: "balanced in a tower"
    },
    {
        name: "baguettes",
        height: 0.65,
        emoji: "🥖",
        preposition: "lined up end to end"
    },
    {
        name: "Pringles cans",
        height: 0.3,
        emoji: "🥫",
        preposition: "stacked up"
    },
    {
        name: "slices of garlic bread",
        height: 0.03,
        emoji: "🍞",
        preposition: "stacked in a delicious tower"
    },
    {
        name: "Philips Airfryer XXL units",
        height: 0.43,
        emoji: "🍳",
        preposition: "stacked precariously"
    },
    {
        name: "USB sticks with \"final_project_v4_REAL_FINAL\" on them",
        height: 0.05,
        emoji: "💾",
        preposition: "lined up end to end"
    },
    {
        name: "Tesla Cybertrucks",
        height: 1.95,
        emoji: "🚙",
        preposition: "stacked impossibly"
    },
    {
        name: "British Shorthairs",
        height: 0.35,
        emoji: "🐱",
        preposition: "sitting on each other"
    },
    {
        name: "Canon PIXMA TS3350 All-in-One Inkjetprinters",
        height: 0.145,
        emoji: "🖨️",
        preposition: "stacked up"
    }
];

// Get DOM elements
const metersInput = document.getElementById('metersInput');
const convertBtn = document.getElementById('convertBtn');
const resultContainer = document.getElementById('result');

// Function to get a random comparison
function getRandomComparison() {
    const randomIndex = Math.floor(Math.random() * comparisons.length);
    return comparisons[randomIndex];
}

// Function to perform conversion
function convert() {
    const meters = parseFloat(metersInput.value);
    
    // Validation
    if (isNaN(meters) || meters <= 0) {
        showResult('🤔', 'Please enter a valid positive number!');
        return;
    }
    
    // Get random comparison
    const comparison = getRandomComparison();
    
    // Calculate the number of objects
    const count = meters / comparison.height;
    
    // Generate result text with input value
    const inputDisplay = meters % 1 === 0 ? meters : parseFloat(meters.toFixed(2));
    let resultText;
    if (count >= 1000000) {
        resultText = `<strong>${inputDisplay} meters...</strong> That's approximately <strong>${(count / 1000000).toFixed(2)} million</strong> ${comparison.name} ${comparison.preposition}! 🤯`;
    } else if (count >= 1000) {
        resultText = `<strong>${inputDisplay} meters...</strong> That's approximately <strong>${(count / 1000).toFixed(2)} thousand</strong> ${comparison.name} ${comparison.preposition}! 😮`;
    } else if (count < 0.01) {
        resultText = `<strong>${inputDisplay} meters...</strong> That's only <strong>${(count * 100).toFixed(2)}%</strong> of a single ${comparison.name}! 🔬`;
    } else if (count < 1) {
        resultText = `<strong>${inputDisplay} meters...</strong> That's <strong>${(count * 100).toFixed(0)}%</strong> of a ${comparison.name}! Pretty small! 📏`;
    } else {
        resultText = `<strong>${inputDisplay} meters...</strong> That's approximately <strong>${count.toFixed(2)}</strong> ${comparison.name} ${comparison.preposition}! ${comparison.emoji}`;
    }
    
    showResult(comparison.emoji, resultText);
}

// Function to display the result
function showResult(emoji, text) {
    resultContainer.innerHTML = `
        <div class="result-emoji">${emoji}</div>
        <div class="result-text">${text}</div>
    `;
    resultContainer.classList.remove('show');
    // Force reflow to restart animation
    void resultContainer.offsetWidth;
    resultContainer.classList.add('show');
}

// Event listeners
convertBtn.addEventListener('click', convert);

metersInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        convert();
    }
});

// Focus input on load
metersInput.focus();
