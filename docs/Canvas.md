# Canvas

所有的UI元素都应该在Canvas对象之中，Canvas是一个带有Canvas组件的GameObject，所有的UI元素都应该是这个Canvas GameObject的子元素。

在创建UI元素的过程中，比如通过菜单栏的 Gameobject > UI > Image 选项创建UI元素的时候，Unity会自动的创建一个Canvas对象。 如果已经存在了一个Canvas对象，那么新创建的UI元素都会成为这个Canvas的子元素。

Canvas对象会在场景视图中被展示为一个长方形。 你可以直接在场景视图中调整UI元素的配置，而非一定要显示游戏视图。

Canvas对象使用 EventSystem 来实现一个消息系统。

## Draw order of elements （UI元素的渲染顺序）

Canvas对象中的UI元素的渲染顺序如同他们在Hierarchy中的位置。 越靠前的元素越先被渲染。 如果两个UI元素重叠，那么在Hierarchy中靠后的UI元素会被渲染在另一个UI元素之上。

想要让一个UI元素显示在另外一个UI元素之上的话，可以简单的在Hierarchy中拖动他们来将其排序。 渲染顺序同样可以通过脚本来控制，详情请参考Transform组件的`SetAsFirstSibling`, `SetAsLastSibling`, `SetSiblingIndex`方法。

## Render Modes （渲染模式）

Canvas对象有一个 `RenderMod` 选项，通过它可以控制Canvas到底是渲染在屏幕空间还是世界空间之中。

### Screen Space - Overlay

这种渲染模式会将Canvas对象渲染在屏幕中的场景之上，如果屏幕改变了大小或者改变了分辨率，那么Canvas会自动的调整自己的大小来适应屏幕。
![Screen Space - Overlay](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/images/GUI_Canvas_Screenspace_Overlay.png)

### Screen Space - Camera

这种渲染模式类似于 `Screen Space - Overlay`，但是在这种模式下Canvas对象会被渲染在特定的相机之前，并且可以调整Canvas距相机的距离。Canvas中的UI元素会被该相机所渲染，这表示相机的设置会影响到以这种方式渲染的UI元素。 如果将相机设置为透视相机，那么UI元素会被渲染为带有透视效果。透视形变的程度可以通过调整相机的`Field of View`来控制。 如果屏幕改变了大小或者改变了分辨率或者相机视锥改变了的话，Canvas也会自动调整以适应变化。

![Screen Space - Overlay](https://docs.unity3d.com/Packages/com.unity.ugui@1.0/manual/images/GUI_Canvas_Screenspace_Camera.png)

### World Space

在这种渲染模式下，Canvas将会表现得和场景中的其它GameObject类似。Canvas的大小可以通过调整它自己的RectTransofrm组件来调整。UI元素在其它的GameObject之前或是之后都是参考3D世界中的坐标。如果UI元素是游戏世界中的一部分的话，那么这种渲染模式非常合适。它通常被使用为 ‘画内界面’(diegetic interface)

