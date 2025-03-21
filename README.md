# Veridian - Fullstack App Generator for ICP

Veridian is a powerful toolkit that streamlines the creation and deployment of fullstack applications on the Internet Computer Protocol (ICP) blockchain. It combines React frontends with Motoko backends, allowing developers to quickly build and deploy decentralized applications to ICP canisters.

## Features

- **One-command setup**: Initialize complete fullstack projects with a single command
- **React frontend**: Pre-configured React application with ICP integration
- **Motoko backend**: Robust Motoko canister code for your application logic
- **Seamless deployment**: Deploy directly to ICP canisters with built-in commands
- **Developer tools**: Integrated development environment with hot-reloading
- **Modular architecture**: Easily extendable for custom requirements

## Installation

```bash
npm install -g veridian
```

## Quick Start

```bash
# Create a new project
veridian init my-awesome-app

# Navigate to your new project
cd my-awesome-app

# Start the development server
veridian dev
```

## Project Structure

```
my-awesome-app/
├── README.md
├── package.json
├── dfx.json
├── webpack.config.js
├── src/
│   ├── frontend/        # React frontend code
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   └── index.jsx
│   └── backend/         # Motoko backend code
│       ├── main.mo
│       └── types.mo
└── .gitignore
```

## Commands

- `veridian init [name]` - Create a new project
- `veridian dev` - Start the development environment
- `veridian build` - Build the project
- `veridian deploy` - Deploy to ICP canisters
- `veridian test` - Run the test suite

## Deployment

Deploying your application to the Internet Computer is straightforward:

```bash
# Build the project
veridian build

# Deploy to local replica (for testing)
veridian deploy --local

# Deploy to ICP mainnet
veridian deploy --network ic
```

## Configuration

Veridian can be configured via the `veridian.config.js` file in your project root:

```javascript
module.exports = {
  frontend: {
    framework: "react",
    port: 8080,
    // Additional React configuration
  },
  backend: {
    entrypoint: "src/backend/main.mo",
    // Additional Motoko configuration
  },
  deploy: {
    cycles: 1000000000000,
    // Additional deployment configuration
  },
};
```

## Requirements

- Node.js (v14 or later)
- dfx CLI (for ICP deployment)
- Internet Computer SDK

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT
