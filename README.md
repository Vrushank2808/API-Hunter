# API-Hunter

API-Hunter is a tool designed to uncover, extract, and monitor undocumented APIs from various web services. It automates the process of discovering hidden API endpoints by analyzing web pages, JavaScript files, and network traffic, providing valuable insights for developers and security researchers.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Output](#output)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Automated Crawling**: Navigates through web pages to identify potential API endpoints.
- **JavaScript Analysis**: Extracts API calls from embedded JavaScript files.
- **Network Traffic Monitoring**: Captures and analyzes network requests to detect undocumented APIs.
- **Comprehensive Reporting**: Generates detailed reports of discovered APIs, including endpoints, methods, and parameters.

## Installation

To install API-Hunter, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/Vrushank2808/API-Hunter.git
   cd API-Hunter
   ```

2. **Install Dependencies**:

   Ensure you have Python 3.x installed. Then, install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

   *Note: The `requirements.txt` file should list all necessary dependencies, such as `requests`, `beautifulsoup4`, `selenium`, etc.*

3. **Set Up WebDriver**:

   API-Hunter utilizes Selenium for web automation. Ensure you have the appropriate WebDriver installed (e.g., ChromeDriver for Google Chrome).

   - **ChromeDriver**:

     Download and install ChromeDriver from the [official site](https://sites.google.com/a/chromium.org/chromedriver/).

   - **GeckoDriver** (for Firefox):

     Download and install GeckoDriver from the [GitHub releases page](https://github.com/mozilla/geckodriver/releases).

## Usage

To run API-Hunter:

```bash
python api_hunter.py [OPTIONS]
```

**Common Options**:

- `-u`, `--url`: Specify the target URL to analyze.
- `-d`, `--depth`: Set the crawling depth (default is 1).
- `-o`, `--output`: Define the output file for the report.
- `-h`, `--help`: Display the help message.

**Example**:

```bash
python api_hunter.py -u https://example.com -d 2 -o report.json
```


This command will crawl `https://example.com` up to a depth of 2 and save the findings in `report.json`.

## Output

The output is a structured JSON file containing details of the discovered APIs:

- **Endpoint**: The URL of the API endpoint.
- **Method**: HTTP method used (GET, POST, etc.).
- **Parameters**: List of parameters accepted by the API.
- **Source**: Location where the API was found (e.g., script file, network request).

**Sample Output**:

```json
[
  {
    "endpoint": "https://example.com/api/data",
    "method": "GET",
    "parameters": ["id", "type"],
    "source": "network"
  },
  {
    "endpoint": "https://example.com/api/submit",
    "method": "POST",
    "parameters": ["name", "email"],
    "source": "script"
  }
]
```

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a Pull Request.

Please ensure your code adheres to the project's coding standards and includes appropriate tests.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

