import * as core from "../../../../../_lib/core/ts/index";
import * as doc from "./document";
import * as work from "./index";
import * as jsUtils from "../../../../../_lib/jsUtils/ts/index";
import * as createjsUtils from "../../../../../_lib/createjsUtils/ts/index";
import { getObject, Position2, SetObjectProperty, Size } from "./SetObjectProperty";
import { isUndefined } from "util";
import * as shoCommon from "../../../../_lib/shoCommon/ts/index";
import { BasePage, ButtonType, PageBaseInfo } from "./BasePage";
import { Functions, COLOR_CODE } from "./Functions";
import { createPageBackgroundDefault } from "../../../../_lib/shoCommon/ts/index";
import * as Res from "./Resource";
import * as Hf from "./HumanFukidashi";
import { strictEqual } from "assert";

export function createHumanNameTag(
  humanName: string,
  colorCode: string,
): createjs.Container {
  const ctr = new createjs.Container();
  ctr.setBounds(0, 0, 170, 50);

  // 背景
  const shape = Functions.createRectShape(
    {x: 0, y: 0},
    {h: 50, w: 170},
    colorCode,
    25,
  );
  ctr.addChild(shape);

  // テキスト
  const text = createjsUtils.createText(
    humanName,
    28,
    core.FONT_FAMILY_MARUGOTHIC_DB,
    "#FFFFFF",
  );
  createjsUtils.align(text, "center", "middle", ctr.getBounds());
  ctr.addChild(text);

  return ctr;
}

export function createHumanIllustAndNameTag(
  humanIllust: createjs.DisplayObject,
  humanName: string,
  colorCode: string,
): createjs.Container {
  const ctr = new createjs.Container();

  const nameTag = createHumanNameTag( humanName, colorCode );

  ctr.addChild(humanIllust);
  ctr.addChild(nameTag);
  createjsUtils.alignH(nameTag, "center", humanIllust.getBounds());
  nameTag.y = 170;

  const boundsW =
  humanIllust.getBounds().width > nameTag.getBounds().width ? humanIllust.getBounds().width : nameTag.getBounds().width;
  const boundsH = nameTag.y + nameTag.getBounds().height;
  ctr.setBounds( 0, 0, boundsW, boundsH );

  return ctr;
}