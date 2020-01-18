/**
 * Copyright (c) 2019-present Wen-Zhi Wang <zxcvb22217@gmail.com>
 * All rights reserved.
 *
 * Use of this source code is governed by a MIT license that can be found 
 * in the LICENSE file.
 */

/** Import scripts. */
import { getBlockUri, getBlockColor } from "./util"

/** Import types. */
import * as NotionBlockAdvanced from "notionapi-agent/dist/interfaces/notion-models/block/AdvancedBlock"

async function transformTableOfContent(
  node: NotionBlockAdvanced.TableOfContent
): Promise<NAST.TableOfContent> {
  return {
    children: [],
    uri: getBlockUri(node),
    type: "table_of_content",
    color: getBlockColor(node)
  }
}

export default transformTableOfContent