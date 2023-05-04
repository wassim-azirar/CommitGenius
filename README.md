# CommitGenius

Powered by GPT-4, `CommitGenius` analyzes the changes in your repository and generates a summary in either a funny or professional tone, as per your preference.

## Installation
```bash
npm install -g commitgenius
```

## Command line usage
To get the comments for the current repo, run the command :
```bash
commitgenius
```

To get the comments for another repo, run the command :
```bash
commitgenius --repo "user/projets/repo-name/"
```

## OpenAI - environment variable

To run this tool, you need to set your OpenAI key in your envirnment variables. 

You can get a new one here : https://platform.openai.com/account/api-keys

![api-key](https://user-images.githubusercontent.com/670586/236320373-df982409-9d12-4aef-90e1-d59409a12338.png)

### macOS and Linux
```bash
export OPENAI_API_KEY="<your_api_key>"
```

### Windows
```powershell
setx OPENAI_API_KEY "<your_api_key>"
```