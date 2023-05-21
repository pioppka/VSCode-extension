const vscode = require('vscode');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable = vscode.commands.registerCommand('selectionhighlighter.highlightSelection', async () => {
		const editor = vscode.window.activeTextEditor;
		const selectedText = editor.selection;

		const color = await vscode.window.showInputBox({
			prompt: "Please enter the color name"
		});

		const decoration = { range: new vscode.Range(selectedText.anchor, selectedText.active)};
		const decorationType = vscode.window.createTextEditorDecorationType({
			border: "1px solid " + color
		});
		
		editor.setDecorations(decorationType, [decoration]);
	  });
	
	  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}