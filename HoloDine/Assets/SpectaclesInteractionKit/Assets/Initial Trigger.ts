@component
export class NewScript extends BaseScriptComponent {
    onAwake() {
script.createEvent("TapEvent").bind((eventData) => {
    // Check if the menu object is assigned
    if (script.menu) {
        // Show the menu and disable the tapped object
        script.menu.enabled = true;
        script.getSceneObject().enabled = false;
    } else {
        print("Menu SceneObject is not assigned.");
    }
});

    }
}
