import { PropertyLine } from "../details/PropertyLine";
import { Helpers } from "../helpers/Helpers";
import { AbstractTreeTool } from "../treetools/AbstractTreeTool";
import { Checkbox, IToolVisible } from "../treetools/Checkbox";
import { Adapter } from "./Adapter";

export class LightAdapter
    extends Adapter
    implements IToolVisible {

    constructor(obj: BABYLON.Light) {
        super(obj);
    }

    /** Returns the name displayed in the tree */
    public id(): string {
        let str = '';
        if (this._obj.name) {
            str = this._obj.name;
        } // otherwise nothing displayed
        return str;
    }

    /** Returns the type of this object - displayed in the tree */
    public type(): string {
        return Helpers.GET_TYPE(this._obj);
    }

    /** Returns the list of properties to be displayed for this adapter */
    public getProperties(): Array<PropertyLine> {
        return Helpers.GetAllLinesProperties(this._obj);
    }

    public getTools(): Array<AbstractTreeTool> {
        let tools = [];
        tools.push(new Checkbox(this));
        return tools;
    }

    public setVisible(b: boolean) {
        this._obj.setEnabled(b);
    }
    public isVisible(): boolean {
        return this._obj.isEnabled();
    }

    /** Returns some information about this mesh */
    // public getInfo() : string {
    //     return `${(this._obj as BABYLON.AbstractMesh).getTotalVertices()} vertices`;
    // }
}