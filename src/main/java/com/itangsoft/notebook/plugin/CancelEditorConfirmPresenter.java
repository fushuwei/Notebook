package com.itangsoft.notebook.plugin;

import com.github.nalukit.nalu.client.plugin.IsCustomConfirmPresenter;
import com.github.nalukit.nalu.client.plugin.IsNaluProcessorPlugin.ConfirmHandler;
import org.dominokit.domino.ui.button.Button;
import org.dominokit.domino.ui.dialogs.MessageDialog;
import org.dominokit.domino.ui.dialogs.MessageDialogStyles;
import org.dominokit.domino.ui.style.Color;

/**
 * Cancel Editor Confirm Presenter
 * <p>
 * Called when the form data is edited and the save is cancelled
 *
 * @author fushuwei
 */
public class CancelEditorConfirmPresenter implements IsCustomConfirmPresenter {

    private ConfirmHandler confirmHandler;

    @Override
    public void confirm(String message) {
        MessageDialog messageDialog = MessageDialog.createMessage("You will lost all your changes!", "This can not reverted!");

        Button revertButton = Button.create("Revert")
            .linkify()
            .setColor(Color.RED)
            .styler(style -> style.addCss(MessageDialogStyles.DIALOG_BUTTON))
            .addClickListener(e -> {
                messageDialog.close();
                confirmHandler.onOk();
            });

        Button cancelButton = Button.create("Cancel")
            .linkify()
            .styler(style -> style.addCss(MessageDialogStyles.DIALOG_BUTTON))
            .addClickListener(e -> {
                messageDialog.close();
                confirmHandler.onCancel();
            });

        messageDialog.setAutoClose(false)
            .setModal(true)
            .warning()
            .getFooterElement()
            .clearElement()
            .appendChild(revertButton)
            .appendChild(cancelButton);

        messageDialog.open();
    }

    @Override
    public void addConfirmHandler(ConfirmHandler confirmHandler) {
        this.confirmHandler = confirmHandler;
    }
}
