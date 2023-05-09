/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
type FileData = File

/**
 * 接口 [详情↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/15893) 的 **请求类型**
 *
 * @分类 [标签管理接口↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/cat_2541)
 * @标签 `标签管理接口`
 * @请求头 `GET /uim/tag/findById/{id}`
 * @更新时间 `2023-04-27 09:59:29`
 */
export interface FindByIdIdRequest {
  /**
   * id
   */
  id: string
}

/**
 * 接口 [详情↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/15893) 的 **返回类型**
 *
 * @分类 [标签管理接口↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/cat_2541)
 * @标签 `标签管理接口`
 * @请求头 `GET /uim/tag/findById/{id}`
 * @更新时间 `2023-04-27 09:59:29`
 */
export interface FindByIdIdResponse {
  categoryId?: number
  createBy?: string
  createTime?: string
  delFlag?: boolean
  deleteBy?: string
  deleteTime?: string
  id?: number
  remark?: string
  status?: 'DISABLE' | 'ENABLE'
  tagName?: string
  updateBy?: string
  updateTime?: string
}

/**
 * 接口 [分页查询↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/15899) 的 **请求类型**
 *
 * @分类 [标签管理接口↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/cat_2541)
 * @标签 `标签管理接口`
 * @请求头 `POST /uim/tag/findByPage`
 * @更新时间 `2023-04-27 09:59:29`
 */
export interface TagFindByPageRequest {
  bean?: {
    /**
     * 分类id
     */
    categoryId?: number
    /**
     * 搜索关键词
     */
    searchKey?: string
    /**
     * 标签状态 DISABLE-禁用 ENABLE-启用
     */
    status?: 'DISABLE' | 'ENABLE'
    /**
     * 用户id
     */
    userId?: number
  }
  page?: number
  pageSize?: number
  sorts?: {}
}

/**
 * 接口 [分页查询↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/15899) 的 **返回类型**
 *
 * @分类 [标签管理接口↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/cat_2541)
 * @标签 `标签管理接口`
 * @请求头 `POST /uim/tag/findByPage`
 * @更新时间 `2023-04-27 09:59:29`
 */
export interface TagFindByPageResponse {
  list?: {
    /**
     * 覆盖人群数
     */
    bindCnt?: number
    /**
     * 分类id
     */
    categoryId?: number
    /**
     * 分类名称
     */
    categoryName?: string
    /**
     * 创建人
     */
    createBy?: string
    /**
     * 创建时间
     */
    createTime?: string
    /**
     * 删除状态 false=未删除,true=已删除
     */
    delFlag?: boolean
    /**
     * 主键
     */
    id?: number
    /**
     * remark
     */
    remark?: string
    /**
     * 标签状态 DISABLE-禁用 ENABLE-启用
     */
    status?: 'DISABLE' | 'ENABLE'
    /**
     * 标签名
     */
    tagName?: string
    /**
     * 更新人
     */
    updateBy?: string
    /**
     * 更新时间
     */
    updateTime?: string
  }[]
  pageNumber?: number
  pageSize?: number
  total?: number
  totalPages?: number
}

/**
 * 接口 [新增↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/15905) 的 **请求类型**
 *
 * @分类 [标签管理接口↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/cat_2541)
 * @标签 `标签管理接口`
 * @请求头 `POST /uim/tag/insert`
 * @更新时间 `2023-04-27 09:59:29`
 */
export interface TagInsertRequest {
  /**
   * 分类id
   */
  categoryId?: number
  /**
   * 主键
   */
  id?: number
  /**
   * 标签描述
   */
  remark?: string
  /**
   * 标签状态 DISABLE-禁用 ENABLE-启用
   */
  status?: 'DISABLE' | 'ENABLE'
  /**
   * 标签名
   */
  tagName?: string
}

/**
 * 接口 [新增↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/15905) 的 **返回类型**
 *
 * @分类 [标签管理接口↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/cat_2541)
 * @标签 `标签管理接口`
 * @请求头 `POST /uim/tag/insert`
 * @更新时间 `2023-04-27 09:59:29`
 */
export type TagInsertResponse = number

/**
 * 接口 [编辑↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/15911) 的 **请求类型**
 *
 * @分类 [标签管理接口↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/cat_2541)
 * @标签 `标签管理接口`
 * @请求头 `POST /uim/tag/update`
 * @更新时间 `2023-04-27 09:59:29`
 */
export interface TagUpdateRequest {
  /**
   * 分类id
   */
  categoryId?: number
  /**
   * 主键
   */
  id?: number
  /**
   * 标签描述
   */
  remark?: string
  /**
   * 标签状态 DISABLE-禁用 ENABLE-启用
   */
  status?: 'DISABLE' | 'ENABLE'
  /**
   * 标签名
   */
  tagName?: string
}

/**
 * 接口 [编辑↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/15911) 的 **返回类型**
 *
 * @分类 [标签管理接口↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/cat_2541)
 * @标签 `标签管理接口`
 * @请求头 `POST /uim/tag/update`
 * @更新时间 `2023-04-27 09:59:29`
 */
export type TagUpdateResponse = boolean

/**
 * 接口 [删除↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/16031) 的 **请求类型**
 *
 * @分类 [标签管理接口↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/cat_2541)
 * @标签 `标签管理接口`
 * @请求头 `DELETE /uim/tag/deleteByIds`
 * @更新时间 `2023-04-27 09:59:29`
 */
export interface TagDeleteByIdsRequest {
  ids?: number[]
}

/**
 * 接口 [删除↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/16031) 的 **返回类型**
 *
 * @分类 [标签管理接口↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/cat_2541)
 * @标签 `标签管理接口`
 * @请求头 `DELETE /uim/tag/deleteByIds`
 * @更新时间 `2023-04-27 09:59:29`
 */
export type TagDeleteByIdsResponse = boolean

/**
 * 接口 [批量移动↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/16037) 的 **请求类型**
 *
 * @分类 [标签管理接口↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/cat_2541)
 * @标签 `标签管理接口`
 * @请求头 `POST /uim/tag/moveByIds`
 * @更新时间 `2023-04-27 09:59:29`
 */
export interface TagMoveByIdsRequest {
  categoryId?: number
  ids?: number[]
}

/**
 * 接口 [批量移动↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/16037) 的 **返回类型**
 *
 * @分类 [标签管理接口↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/cat_2541)
 * @标签 `标签管理接口`
 * @请求头 `POST /uim/tag/moveByIds`
 * @更新时间 `2023-04-27 09:59:29`
 */
export type TagMoveByIdsResponse = boolean

/**
 * 接口 [标签聚合列表↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/16163) 的 **请求类型**
 *
 * @分类 [标签管理接口↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/cat_2541)
 * @标签 `标签管理接口`
 * @请求头 `POST /uim/tag/aggList`
 * @更新时间 `2023-04-27 09:59:29`
 */
export interface TagAggListRequest {}

/**
 * 接口 [标签聚合列表↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/16163) 的 **返回类型**
 *
 * @分类 [标签管理接口↗](http://yapi.meiyeyanjiu.com/project/67/interface/api/cat_2541)
 * @标签 `标签管理接口`
 * @请求头 `POST /uim/tag/aggList`
 * @更新时间 `2023-04-27 09:59:29`
 */
export type TagAggListResponse = {
  /**
   * 覆盖人群数
   */
  bindCnt?: number
  /**
   * 分类id
   */
  categoryId?: number
  /**
   * 分类名称
   */
  categoryName?: string
  /**
   * 创建人
   */
  createBy?: string
  /**
   * 创建时间
   */
  createTime?: string
  /**
   * 删除状态 false=未删除,true=已删除
   */
  delFlag?: boolean
  /**
   * 主键
   */
  id?: number
  /**
   * remark
   */
  remark?: string
  /**
   * 标签状态 DISABLE-禁用 ENABLE-启用
   */
  status?: 'DISABLE' | 'ENABLE'
  /**
   * 标签名
   */
  tagName?: string
  /**
   * 更新人
   */
  updateBy?: string
  /**
   * 更新时间
   */
  updateTime?: string
}[]

/* prettier-ignore-end */
