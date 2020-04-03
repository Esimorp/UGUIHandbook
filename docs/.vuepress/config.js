module.exports = {
    title: 'UGUI handbook',
    description: 'UGUI 中文手册',
    themeConfig: {
        sidebar: [
            ['/UnityUIUnityUserInterface', "Unity UI: Unity User Interface"],
            ['/Canvas', "Canvas"],
            ['/BasicLayout', "Basic Layout"],
            ['/VisualComponents', "Visual Components"],
            ['/InteractionComponents', "Interaction Components"],
            ['/AnimationIntegration', "Animation Integration"],
            ['/AutoLayout', "Auto Layout"],
            ['/RichText', "Rich Text"],
            {
                title: 'Events',   // 必要的
                path: '/Events/',      // 可选的, 应该是一个绝对路径
                children: [
                    ['/Events/Messaging​System.md', "Messaging​System"],
                    ['/Events/Input​Modules.md', "Input​Modules"],
                    ['/Events/Supported​Events.md', "Supported​Events"],
                    ['/Events/Raycasters.md', "Raycasters"],
                ]
            },
            {
                title: 'Reference',
                path: '/Reference/',      // 可选的, 应该是一个绝对路径
                children: [
                    ['/Reference/RectTransform.md', "Rect Transform"],
                    {
                        title: 'CanvasComponents',   // 必要的
                        path: '/Reference/CanvasComponents/',      // 可选的, 应该是一个绝对路径
                        children: [
                            ['/Reference/CanvasComponents/Canvas', "Canvas"],
                            ['/Reference/CanvasComponents/CanvasScaler', "Canvas Scaler"],
                            ['/Reference/CanvasComponents/CanvasGroup', "Canvas Group"],
                            ['/Reference/CanvasComponents/CanvasRenderer', "Canvas Renderer"],
                        ]
                    },
                    {
                        title: 'Visual UIInteraction​Components',   // 必要的
                        path: '/Reference/VisualUIInteraction​Components/',      // 可选的, 应该是一个绝对路径
                        children: [
                            ['/Reference/VisualUIInteraction​Components/Text.md', "Text"],
                            ['/Reference/VisualUIInteraction​Components/Image.md', "Image"],
                            ['/Reference/VisualUIInteraction​Components/RawImage.md', "Raw Image"],
                            ['/Reference/VisualUIInteraction​Components/Mask.md', "Mask"],
                            ['/Reference/VisualUIInteraction​Components/Rect​Mask2D.md', "Rect​Mask2D"],
                            {
                                title: 'UI Effect Components',   // 必要的
                                path: '/Reference/VisualUIInteraction​Components/UIEffectComponents',      // 可选的, 应该是一个绝对路径
                                children: [
                                    ['/Reference/VisualUIInteraction​Components/UIEffectComponents/Shadow', "Shadow"],
                                    ['/Reference/VisualUIInteraction​Components/UIEffectComponents/Outline', "Outline"],
                                    ['/Reference/VisualUIInteraction​Components/UIEffectComponents/PositionasUV1', "Position as UV1"],
                                ]
                            }
                        ]
                    },
                    {
                        title: 'Interaction Components',   // 必要的
                        path: '/InteractionComponents/',      // 可选的, 应该是一个绝对路径
                        children: [
                            {
                                title: 'Selectable Base Class',   // 必要的
                                path: '/Reference/InteractionComponents/SelectableBaseClass/',      // 可选的, 应该是一个绝对路径
                                children: [
                                    ['/Reference/InteractionComponents/SelectableBaseClass/TransitionOptions.md', "Transition Options"],
                                    ['/Reference/InteractionComponents/SelectableBaseClass/NavigationOptions.md', "Navigation Options"],
                                ]
                            },
                            ['/Reference/InteractionComponents/Button.md', "Button"],
                            ['/Reference/InteractionComponents/Toggle.md', "Toggle"],
                            ['/Reference/InteractionComponents/ToggleGroup.md', "Toggle Group"],
                            ['/Reference/InteractionComponents/Slider.md', "Slider"],
                            ['/Reference/InteractionComponents/Scrollbar.md', "Scrollbar"],
                            ['/Reference/InteractionComponents/Dropdown.md', "Dropdown"],
                            ['/Reference/InteractionComponents/InputField.md', "Input Field"],
                            ['/Reference/InteractionComponents/ScrollRect.md', "Scroll Rect"],
                        ]
                    },
                    {
                        title: 'Auto Layout',   // 必要的
                        path: '/Reference/AutoLayout/',      // 可选的, 应该是一个绝对路径
                        children: [
                            ['/Reference/AutoLayout/LayoutElement.md', "Layout Element"],
                            ['/Reference/AutoLayout/ContentSizeFitter.md', "Content Size Fitter"],
                            ['/Reference/AutoLayout/AspectRatioFitter.md', "Aspect Ratio Fitter"],
                            ['/Reference/AutoLayout/HorizontalLayoutGroup.md', "Horizontal Layout Group"],
                            ['/Reference/AutoLayout/VerticalLayoutGroup.md', "Vertical Layout Group"],
                            ['/Reference/AutoLayout/GridLayoutGroup.md', "Grid Layout Group"],
                        ]
                    },
                    {
                        title: 'Events',   // 必要的
                        path: '/Reference/Events/',      // 可选的, 应该是一个绝对路径
                        children: [
                            ['/Reference/Events/scriptEvent​System.md', "script-Event​System"],
                            ['/Reference/Events/scriptGraphic​Raycaster.md', "script-Graphic​Raycaster"],
                            ['/Reference/Events/scriptPhysics​Raycaster.md', "script-Physics​Raycaster"],
                            ['/Reference/Events/scriptPhysics2DRaycaster.md', "script-Physics2DRaycaster"],
                            ['/Reference/Events/scriptStandalone​Input​Module.md', "script-Standalone​Input​Module"],
                            ['/Reference/Events/scriptTouch​Input​Module.md', "script-Touch​Input​Module"],
                            ['/Reference/Events/scriptEvent​Trigger.md', "script-Event​Trigger"],
                        ]
                    }

                ]
            },
            {
                title: 'UI How Tos',   // 必要的
                path: '/UIHowTos/',      // 可选的, 应该是一个绝对路径
                children: [
                    ['/UIHowTos/DesigningUIforMultipleResolutions.md', "Designing UI for Multiple Resolutions"],
                    ['/UIHowTos/MakingUIelementsfitthesizeoftheircontent.md', "Making UI elements fit the size of their content"],
                    ['/UIHowTos/CreatingaWorldSpaceUI.md', "Creating a World Space UI"],
                    ['/UIHowTos/RectTrCreatingUIelementsfromscriptingansform.md', "Creating UI elements from scripting"],
                    ['/UIHowTos/CreatingScreenTransitions.md', "Creating Screen Transitions"],
                ]
            },
        ],
    }
}