/* tslint:disable */
/* An object with an id, parent, and children */
export interface Node {
  id: string; /* The id of the node. */
  parent?: Node; /* The parent of this node. */
  children?: Node[]; /* The children of this node. */
}

export interface RootQueryType {
  allSitePage?: SitePageConnection; /* Connection to all SitePage nodes */
  allSitePlugin?: SitePluginConnection; /* Connection to all SitePlugin nodes */
  allFile?: FileConnection; /* Connection to all File nodes */
  allImageSharp?: ImageSharpConnection; /* Connection to all ImageSharp nodes */
  allWordpressWpMedia?: wordpress__wp_mediaConnection; /* Connection to all wordpress__wp_media nodes */
  allWordpressWpTrabajos?: wordpress__wp_trabajosConnection; /* Connection to all wordpress__wp_trabajos nodes */
  allWordpressWpTypes?: wordpress__wp_typesConnection; /* Connection to all wordpress__wp_types nodes */
  allWordpressWpStatuses?: wordpress__wp_statusesConnection; /* Connection to all wordpress__wp_statuses nodes */
  allWordpressWpTaxonomies?: wordpress__wp_taxonomiesConnection; /* Connection to all wordpress__wp_taxonomies nodes */
  allWordpressCategory?: wordpress__CATEGORYConnection; /* Connection to all wordpress__CATEGORY nodes */
  allWordpressTag?: wordpress__TAGConnection; /* Connection to all wordpress__TAG nodes */
  allWordpressWpClientes?: wordpress__wp_clientesConnection; /* Connection to all wordpress__wp_clientes nodes */
  allWordpressWpUsers?: wordpress__wp_usersConnection; /* Connection to all wordpress__wp_users nodes */
  sitePage?: SitePage; 
  sitePlugin?: SitePlugin; 
  site?: Site; 
  file?: File; 
  imageSharp?: ImageSharp; 
  wordpressWpMedia?: wordpress__wp_media; 
  wordpressWpTrabajos?: wordpress__wp_trabajos; 
  wordpressWpTypes?: wordpress__wp_types; 
  wordpressWpStatuses?: wordpress__wp_statuses; 
  wordpressWpTaxonomies?: wordpress__wp_taxonomies; 
  wordpressCategory?: wordpress__CATEGORY; 
  wordpressTag?: wordpress__TAG; 
  wordpressWpClientes?: wordpress__wp_clientes; 
  wordpressWpUsers?: wordpress__wp_users; 
}
/* A connection to a list of items. */
export interface SitePageConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: SitePageEdge[]; /* A list of edges. */
  totalCount?: number; 
  distinct?: string[]; 
  group?: sitePageGroupConnectionConnection[]; 
}
/* Information about pagination in a connection. */
export interface PageInfo {
  hasNextPage: boolean; /* When paginating, are there more items? */
}
/* An edge in a connection. */
export interface SitePageEdge {
  node?: SitePage; /* The item at the end of the edge */
  next?: SitePage; /* The next edge in the connection */
  previous?: SitePage; /* The previous edge in the connection */
}
/* Node of type SitePage */
export interface SitePage extends Node {
  id: string; /* The id of this node. */
  parent?: Node; /* The parent of this node. */
  children?: Node[]; /* The children of this node. */
  component?: string; 
  path?: string; 
  componentChunkName?: string; 
  layout?: string; 
  jsonName?: string; 
  internalComponentName?: string; 
  updatedAt?: number; 
  context?: context; 
  pluginCreator?: SitePlugin; 
  pluginCreatorId?: string; 
  componentPath?: string; 
  internal?: internal_15; 
}

export interface context {
  id?: string; 
}
/* Node of type SitePlugin */
export interface SitePlugin extends Node {
  id: string; /* The id of this node. */
  parent?: Node; /* The parent of this node. */
  children?: Node[]; /* The children of this node. */
  resolve?: string; 
  name?: string; 
  version?: string; 
  pluginOptions?: pluginOptions_2; 
  nodeAPIs?: string[]; 
  pluginFilepath?: string; 
  packageJson?: packageJson_2; 
  internal?: internal_16; 
}

export interface pluginOptions_2 {
  baseUrl?: string; 
  protocol?: string; 
  hostingWPCOM?: boolean; 
  useACF?: boolean; 
  verboseOutput?: boolean; 
}

export interface packageJson_2 {
  name?: string; 
  description?: string; 
  version?: string; 
  main?: string; 
  keywords?: string[]; 
  license?: string; 
  dependencies?: dependencies_2[]; 
  devDependencies?: devDependencies_2[]; 
}

export interface dependencies_2 {
  name?: string; 
  version?: string; 
}

export interface devDependencies_2 {
  name?: string; 
  version?: string; 
}

export interface internal_16 {
  contentDigest?: string; 
  type?: string; 
  owner?: string; 
}

export interface internal_15 {
  type?: string; 
  contentDigest?: string; 
  owner?: string; 
}
/* A connection to a list of items. */
export interface sitePageGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: sitePageGroupConnectionEdge[]; /* A list of edges. */
  field?: string; 
  fieldValue?: string; 
  totalCount?: number; 
}
/* An edge in a connection. */
export interface sitePageGroupConnectionEdge {
  node?: SitePage; /* The item at the end of the edge */
  next?: SitePage; /* The next edge in the connection */
  previous?: SitePage; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface SitePluginConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: SitePluginEdge[]; /* A list of edges. */
  totalCount?: number; 
  distinct?: string[]; 
  group?: sitePluginGroupConnectionConnection[]; 
}
/* An edge in a connection. */
export interface SitePluginEdge {
  node?: SitePlugin; /* The item at the end of the edge */
  next?: SitePlugin; /* The next edge in the connection */
  previous?: SitePlugin; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface sitePluginGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: sitePluginGroupConnectionEdge[]; /* A list of edges. */
  field?: string; 
  fieldValue?: string; 
  totalCount?: number; 
}
/* An edge in a connection. */
export interface sitePluginGroupConnectionEdge {
  node?: SitePlugin; /* The item at the end of the edge */
  next?: SitePlugin; /* The next edge in the connection */
  previous?: SitePlugin; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface FileConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: FileEdge[]; /* A list of edges. */
  totalCount?: number; 
  distinct?: string[]; 
  group?: fileGroupConnectionConnection[]; 
}
/* An edge in a connection. */
export interface FileEdge {
  node?: File; /* The item at the end of the edge */
  next?: File; /* The next edge in the connection */
  previous?: File; /* The previous edge in the connection */
}
/* Node of type File */
export interface File extends Node {
  id: string; /* The id of this node. */
  parent?: Node; /* The parent of this node. */
  children?: Node[]; /* The children of this node. */
  childImageSharp?: ImageSharp; /* The child of this node of type imageSharp */
  internal?: internal_17; 
  sourceInstanceName?: string; 
  absolutePath?: string; 
  relativePath?: string; 
  extension?: string; 
  size?: string; 
  prettySize?: string; 
  modifiedTime?: string; 
  accessTime?: string; 
  changeTime?: string; 
  birthTime?: string; 
  root?: string; 
  dir?: string; 
  base?: string; 
  ext?: string; 
  name?: string; 
  relativeDirectory?: string; 
  dev?: number; 
  mode?: number; 
  nlink?: number; 
  uid?: number; 
  gid?: number; 
  rdev?: number; 
  ino?: number; 
  atimeMs?: number; 
  mtimeMs?: number; 
  ctimeMs?: number; 
  birthtimeMs?: number; 
  atime?: string; 
  mtime?: string; 
  ctime?: string; 
  birthtime?: string; 
}
/* Node of type ImageSharp */
export interface ImageSharp extends Node {
  id: string; /* The id of this node. */
  parent?: Node; /* The parent of this node. */
  children?: Node[]; /* The children of this node. */
  internal?: internal_18; 
  original?: ImageSharpOriginal; 
  resolutions?: ImageSharpResolutions; 
  sizes?: ImageSharpSizes; 
  responsiveResolution?: ImageSharpResponsiveResolution; 
  responsiveSizes?: ImageSharpResponsiveSizes; 
  resize?: ImageSharpResize; 
}

export interface internal_18 {
  contentDigest?: string; 
  type?: string; 
  owner?: string; 
}

export interface ImageSharpOriginal {
  width?: number; 
  height?: number; 
  src?: string; 
}

export interface ImageSharpResolutions {
  base64?: string; 
  tracedSVG?: string; 
  aspectRatio?: number; 
  width?: number; 
  height?: number; 
  src?: string; 
  srcSet?: string; 
  srcWebp?: string; 
  srcSetWebp?: string; 
  originalName?: string; 
}

export interface ImageSharpSizes {
  base64?: string; 
  tracedSVG?: string; 
  aspectRatio?: number; 
  src?: string; 
  srcSet?: string; 
  srcWebp?: string; 
  srcSetWebp?: string; 
  sizes?: string; 
  originalImg?: string; 
  originalName?: string; 
}

export interface ImageSharpResponsiveResolution {
  base64?: string; 
  aspectRatio?: number; 
  width?: number; 
  height?: number; 
  src?: string; 
  srcSet?: string; 
  originalName?: string; 
}

export interface ImageSharpResponsiveSizes {
  base64?: string; 
  aspectRatio?: number; 
  src?: string; 
  srcSet?: string; 
  sizes?: string; 
  originalImg?: string; 
  originalName?: string; 
}

export interface ImageSharpResize {
  src?: string; 
  tracedSVG?: string; 
  width?: number; 
  height?: number; 
  aspectRatio?: number; 
  originalName?: string; 
}

export interface internal_17 {
  contentDigest?: string; 
  mediaType?: string; 
  type?: string; 
  owner?: string; 
}
/* A connection to a list of items. */
export interface fileGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: fileGroupConnectionEdge[]; /* A list of edges. */
  field?: string; 
  fieldValue?: string; 
  totalCount?: number; 
}
/* An edge in a connection. */
export interface fileGroupConnectionEdge {
  node?: File; /* The item at the end of the edge */
  next?: File; /* The next edge in the connection */
  previous?: File; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface ImageSharpConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: ImageSharpEdge[]; /* A list of edges. */
  totalCount?: number; 
  distinct?: string[]; 
  group?: imageSharpGroupConnectionConnection[]; 
}
/* An edge in a connection. */
export interface ImageSharpEdge {
  node?: ImageSharp; /* The item at the end of the edge */
  next?: ImageSharp; /* The next edge in the connection */
  previous?: ImageSharp; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface imageSharpGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: imageSharpGroupConnectionEdge[]; /* A list of edges. */
  field?: string; 
  fieldValue?: string; 
  totalCount?: number; 
}
/* An edge in a connection. */
export interface imageSharpGroupConnectionEdge {
  node?: ImageSharp; /* The item at the end of the edge */
  next?: ImageSharp; /* The next edge in the connection */
  previous?: ImageSharp; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface wordpress__wp_mediaConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpress__wp_mediaEdge[]; /* A list of edges. */
  totalCount?: number; 
  distinct?: string[]; 
  group?: wordpressWpMediaGroupConnectionConnection[]; 
}
/* An edge in a connection. */
export interface wordpress__wp_mediaEdge {
  node?: wordpress__wp_media; /* The item at the end of the edge */
  next?: wordpress__wp_media; /* The next edge in the connection */
  previous?: wordpress__wp_media; /* The previous edge in the connection */
}
/* Node of type wordpress__wp_media */
export interface wordpress__wp_media extends Node {
  id: string; /* The id of this node. */
  parent?: Node; /* The parent of this node. */
  children?: Node[]; /* The children of this node. */
  wordpress_id?: number; 
  date?: string; 
  guid?: string; 
  modified?: string; 
  slug?: string; 
  status?: string; 
  type?: string; 
  link?: string; 
  title?: string; 
  comment_status?: string; 
  ping_status?: string; 
  template?: string; 
  description?: string; 
  caption?: string; 
  alt_text?: string; 
  media_type?: string; 
  mime_type?: string; 
  media_details?: mediaDetails_2; 
  post?: number; 
  source_url?: string; 
  _links?: links_10; 
  author?: wordpress__wp_users; 
  localFile?: File; 
  internal?: internal_19; 
}

export interface mediaDetails_2 {
  width?: string; 
  height?: string; 
  file?: string; 
  image_meta?: imageMeta_2; 
}

export interface imageMeta_2 {
  aperture?: string; 
  credit?: string; 
  camera?: string; 
  caption?: string; 
  created_timestamp?: string; 
  copyright?: string; 
  focal_length?: string; 
  iso?: string; 
  shutter_speed?: string; 
  title?: string; 
  orientation?: string; 
  keywords?: string[]; 
}

export interface links_10 {
  self?: self_7[]; 
  collection?: collection_9[]; 
  about?: about_6[]; 
  author?: author_2[]; 
  replies?: replies_2[]; 
}

export interface self_7 {
  href?: string; 
}

export interface collection_9 {
  href?: string; 
}

export interface about_6 {
  href?: string; 
}

export interface author_2 {
  embeddable?: boolean; 
  href?: string; 
}

export interface replies_2 {
  embeddable?: boolean; 
  href?: string; 
}
/* Node of type wordpress__wp_users */
export interface wordpress__wp_users extends Node {
  id: string; /* The id of this node. */
  parent?: Node; /* The parent of this node. */
  children?: Node[]; /* The children of this node. */
  wordpress_id?: number; 
  name?: string; 
  url?: string; 
  description?: string; 
  link?: string; 
  slug?: string; 
  _links?: links_11; 
  all_authored_entities?: wordpress__wp_media[]; 
  authored_wordpress__wp_media?: wordpress__wp_media[]; 
  internal?: internal_20; 
}

export interface links_11 {
  self?: self_8[]; 
  collection?: collection_10[]; 
}

export interface self_8 {
  href?: string; 
}

export interface collection_10 {
  href?: string; 
}

export interface internal_20 {
  type?: string; 
  contentDigest?: string; 
  owner?: string; 
}

export interface internal_19 {
  type?: string; 
  contentDigest?: string; 
  owner?: string; 
}
/* A connection to a list of items. */
export interface wordpressWpMediaGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpressWpMediaGroupConnectionEdge[]; /* A list of edges. */
  field?: string; 
  fieldValue?: string; 
  totalCount?: number; 
}
/* An edge in a connection. */
export interface wordpressWpMediaGroupConnectionEdge {
  node?: wordpress__wp_media; /* The item at the end of the edge */
  next?: wordpress__wp_media; /* The next edge in the connection */
  previous?: wordpress__wp_media; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface wordpress__wp_trabajosConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpress__wp_trabajosEdge[]; /* A list of edges. */
  totalCount?: number; 
  distinct?: string[]; 
  group?: wordpressWpTrabajosGroupConnectionConnection[]; 
}
/* An edge in a connection. */
export interface wordpress__wp_trabajosEdge {
  node?: wordpress__wp_trabajos; /* The item at the end of the edge */
  next?: wordpress__wp_trabajos; /* The next edge in the connection */
  previous?: wordpress__wp_trabajos; /* The previous edge in the connection */
}
/* Node of type wordpress__wp_trabajos */
export interface wordpress__wp_trabajos extends Node {
  id: string; /* The id of this node. */
  parent?: Node; /* The parent of this node. */
  children?: Node[]; /* The children of this node. */
  wordpress_id?: number; 
  date?: string; 
  guid?: string; 
  modified?: string; 
  slug?: string; 
  status?: string; 
  type?: string; 
  link?: string; 
  title?: string; 
  template?: string; 
  tags?: number[]; 
  clientes?: number[]; 
  acf?: acf_2; 
  _links?: links_12; 
  internal?: internal_21; 
}

export interface acf_2 {
  cliente?: cliente_2; 
  campana?: string; 
  tipo?: tipo_2[]; 
  descripcion?: string; 
  imagen?: imagen_2; 
  piezas?: piezas_2[]; 
}

export interface cliente_2 {
  term_id?: number; 
  name?: string; 
  slug?: string; 
  term_group?: number; 
  term_taxonomy_id?: number; 
  taxonomy?: string; 
  description?: string; 
  wordpress_parent?: number; 
  count?: number; 
  filter?: string; 
}

export interface tipo_2 {
  term_id?: number; 
  name?: string; 
  slug?: string; 
  term_group?: number; 
  term_taxonomy_id?: number; 
  taxonomy?: string; 
  description?: string; 
  wordpress_parent?: number; 
  count?: number; 
  filter?: string; 
}

export interface imagen_2 {
  wordpress_id?: number; 
  title?: string; 
  filename?: string; 
  url?: string; 
  alt?: string; 
  author?: string; 
  description?: string; 
  caption?: string; 
  name?: string; 
  date?: string; 
  modified?: string; 
  mime_type?: string; 
  type?: string; 
  icon?: string; 
  width?: number; 
  height?: number; 
  sizes?: sizes_3; 
}

export interface sizes_3 {
  thumbnail?: string; 
  thumbnail_width?: number; 
  thumbnail_height?: number; 
  medium?: string; 
  medium_width?: number; 
  medium_height?: number; 
  medium_large?: string; 
  medium_large_width?: number; 
  medium_large_height?: number; 
  large?: string; 
  large_width?: number; 
  large_height?: number; 
}

export interface piezas_2 {
  url?: string; 
  imagen_de_la_pieza?: imagenDeLaPieza_2; 
  tipo_de_pieza?: string; 
  campana?: string; 
  descripcion?: string; 
}

export interface imagenDeLaPieza_2 {
  wordpress_id?: number; 
  title?: string; 
  filename?: string; 
  url?: string; 
  alt?: string; 
  author?: string; 
  description?: string; 
  caption?: string; 
  name?: string; 
  date?: string; 
  modified?: string; 
  mime_type?: string; 
  type?: string; 
  icon?: string; 
  width?: string; 
  height?: string; 
  sizes?: sizes_4; 
}

export interface sizes_4 {
  thumbnail?: string; 
  thumbnail_width?: number; 
  thumbnail_height?: number; 
  medium?: string; 
  medium_width?: number; 
  medium_height?: number; 
  medium_large?: string; 
  medium_large_width?: number; 
  medium_large_height?: string; 
  large?: string; 
  large_width?: number; 
  large_height?: string; 
}

export interface links_12 {
  self?: self_9[]; 
  collection?: collection_11[]; 
  about?: about_7[]; 
  wp_attachment?: wpAttachment_2[]; 
  wp_term?: wpTerm_2[]; 
  curies?: curies_7[]; 
}

export interface self_9 {
  href?: string; 
}

export interface collection_11 {
  href?: string; 
}

export interface about_7 {
  href?: string; 
}

export interface wpAttachment_2 {
  href?: string; 
}

export interface wpTerm_2 {
  taxonomy?: string; 
  embeddable?: boolean; 
  href?: string; 
}

export interface curies_7 {
  name?: string; 
  href?: string; 
  templated?: boolean; 
}

export interface internal_21 {
  type?: string; 
  contentDigest?: string; 
  owner?: string; 
}
/* A connection to a list of items. */
export interface wordpressWpTrabajosGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpressWpTrabajosGroupConnectionEdge[]; /* A list of edges. */
  field?: string; 
  fieldValue?: string; 
  totalCount?: number; 
}
/* An edge in a connection. */
export interface wordpressWpTrabajosGroupConnectionEdge {
  node?: wordpress__wp_trabajos; /* The item at the end of the edge */
  next?: wordpress__wp_trabajos; /* The next edge in the connection */
  previous?: wordpress__wp_trabajos; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface wordpress__wp_typesConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpress__wp_typesEdge[]; /* A list of edges. */
  totalCount?: number; 
  distinct?: string[]; 
  group?: wordpressWpTypesGroupConnectionConnection[]; 
}
/* An edge in a connection. */
export interface wordpress__wp_typesEdge {
  node?: wordpress__wp_types; /* The item at the end of the edge */
  next?: wordpress__wp_types; /* The next edge in the connection */
  previous?: wordpress__wp_types; /* The previous edge in the connection */
}
/* Node of type wordpress__wp_types */
export interface wordpress__wp_types extends Node {
  id: string; /* The id of this node. */
  parent?: Node; /* The parent of this node. */
  children?: Node[]; /* The children of this node. */
  wordpress_id?: string; 
  description?: string; 
  hierarchical?: boolean; 
  name?: string; 
  slug?: string; 
  taxonomies?: string[]; 
  rest_base?: string; 
  _links?: links_13; 
  internal?: internal_22; 
}

export interface links_13 {
  collection?: collection_12[]; 
  wp_items?: wpItems_3[]; 
  curies?: curies_8[]; 
}

export interface collection_12 {
  href?: string; 
}

export interface wpItems_3 {
  href?: string; 
}

export interface curies_8 {
  name?: string; 
  href?: string; 
  templated?: boolean; 
}

export interface internal_22 {
  type?: string; 
  contentDigest?: string; 
  owner?: string; 
}
/* A connection to a list of items. */
export interface wordpressWpTypesGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpressWpTypesGroupConnectionEdge[]; /* A list of edges. */
  field?: string; 
  fieldValue?: string; 
  totalCount?: number; 
}
/* An edge in a connection. */
export interface wordpressWpTypesGroupConnectionEdge {
  node?: wordpress__wp_types; /* The item at the end of the edge */
  next?: wordpress__wp_types; /* The next edge in the connection */
  previous?: wordpress__wp_types; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface wordpress__wp_statusesConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpress__wp_statusesEdge[]; /* A list of edges. */
  totalCount?: number; 
  distinct?: string[]; 
  group?: wordpressWpStatusesGroupConnectionConnection[]; 
}
/* An edge in a connection. */
export interface wordpress__wp_statusesEdge {
  node?: wordpress__wp_statuses; /* The item at the end of the edge */
  next?: wordpress__wp_statuses; /* The next edge in the connection */
  previous?: wordpress__wp_statuses; /* The previous edge in the connection */
}
/* Node of type wordpress__wp_statuses */
export interface wordpress__wp_statuses extends Node {
  id: string; /* The id of this node. */
  parent?: Node; /* The parent of this node. */
  children?: Node[]; /* The children of this node. */
  wordpress_id?: string; 
  name?: string; 
  public?: boolean; 
  queryable?: boolean; 
  slug?: string; 
  _links?: links_14; 
  internal?: internal_23; 
}

export interface links_14 {
  archives?: archives_2[]; 
}

export interface archives_2 {
  href?: string; 
}

export interface internal_23 {
  type?: string; 
  contentDigest?: string; 
  owner?: string; 
}
/* A connection to a list of items. */
export interface wordpressWpStatusesGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpressWpStatusesGroupConnectionEdge[]; /* A list of edges. */
  field?: string; 
  fieldValue?: string; 
  totalCount?: number; 
}
/* An edge in a connection. */
export interface wordpressWpStatusesGroupConnectionEdge {
  node?: wordpress__wp_statuses; /* The item at the end of the edge */
  next?: wordpress__wp_statuses; /* The next edge in the connection */
  previous?: wordpress__wp_statuses; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface wordpress__wp_taxonomiesConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpress__wp_taxonomiesEdge[]; /* A list of edges. */
  totalCount?: number; 
  distinct?: string[]; 
  group?: wordpressWpTaxonomiesGroupConnectionConnection[]; 
}
/* An edge in a connection. */
export interface wordpress__wp_taxonomiesEdge {
  node?: wordpress__wp_taxonomies; /* The item at the end of the edge */
  next?: wordpress__wp_taxonomies; /* The next edge in the connection */
  previous?: wordpress__wp_taxonomies; /* The previous edge in the connection */
}
/* Node of type wordpress__wp_taxonomies */
export interface wordpress__wp_taxonomies extends Node {
  id: string; /* The id of this node. */
  parent?: Node; /* The parent of this node. */
  children?: Node[]; /* The children of this node. */
  wordpress_id?: string; 
  name?: string; 
  slug?: string; 
  description?: string; 
  types?: string[]; 
  hierarchical?: boolean; 
  rest_base?: string; 
  _links?: links_15; 
  internal?: internal_24; 
}

export interface links_15 {
  collection?: collection_13[]; 
  wp_items?: wpItems_4[]; 
  curies?: curies_9[]; 
}

export interface collection_13 {
  href?: string; 
}

export interface wpItems_4 {
  href?: string; 
}

export interface curies_9 {
  name?: string; 
  href?: string; 
  templated?: boolean; 
}

export interface internal_24 {
  type?: string; 
  contentDigest?: string; 
  owner?: string; 
}
/* A connection to a list of items. */
export interface wordpressWpTaxonomiesGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpressWpTaxonomiesGroupConnectionEdge[]; /* A list of edges. */
  field?: string; 
  fieldValue?: string; 
  totalCount?: number; 
}
/* An edge in a connection. */
export interface wordpressWpTaxonomiesGroupConnectionEdge {
  node?: wordpress__wp_taxonomies; /* The item at the end of the edge */
  next?: wordpress__wp_taxonomies; /* The next edge in the connection */
  previous?: wordpress__wp_taxonomies; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface wordpress__CATEGORYConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpress__CATEGORYEdge[]; /* A list of edges. */
  totalCount?: number; 
  distinct?: string[]; 
  group?: wordpressCategoryGroupConnectionConnection[]; 
}
/* An edge in a connection. */
export interface wordpress__CATEGORYEdge {
  node?: wordpress__CATEGORY; /* The item at the end of the edge */
  next?: wordpress__CATEGORY; /* The next edge in the connection */
  previous?: wordpress__CATEGORY; /* The previous edge in the connection */
}
/* Node of type wordpress__CATEGORY */
export interface wordpress__CATEGORY extends Node {
  id: string; /* The id of this node. */
  parent?: Node; /* The parent of this node. */
  children?: Node[]; /* The children of this node. */
  wordpress_id?: number; 
  count?: number; 
  description?: string; 
  link?: string; 
  name?: string; 
  slug?: string; 
  wordpress_parent?: number; 
  _links?: links_16; 
  taxonomy?: wordpress__wp_taxonomies; 
  internal?: internal_25; 
}

export interface links_16 {
  self?: self_10[]; 
  collection?: collection_14[]; 
  about?: about_8[]; 
  wp_post_type?: wpPostType_4[]; 
  curies?: curies_10[]; 
}

export interface self_10 {
  href?: string; 
}

export interface collection_14 {
  href?: string; 
}

export interface about_8 {
  href?: string; 
}

export interface wpPostType_4 {
  href?: string; 
}

export interface curies_10 {
  name?: string; 
  href?: string; 
  templated?: boolean; 
}

export interface internal_25 {
  type?: string; 
  contentDigest?: string; 
  owner?: string; 
}
/* A connection to a list of items. */
export interface wordpressCategoryGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpressCategoryGroupConnectionEdge[]; /* A list of edges. */
  field?: string; 
  fieldValue?: string; 
  totalCount?: number; 
}
/* An edge in a connection. */
export interface wordpressCategoryGroupConnectionEdge {
  node?: wordpress__CATEGORY; /* The item at the end of the edge */
  next?: wordpress__CATEGORY; /* The next edge in the connection */
  previous?: wordpress__CATEGORY; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface wordpress__TAGConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpress__TAGEdge[]; /* A list of edges. */
  totalCount?: number; 
  distinct?: string[]; 
  group?: wordpressTagGroupConnectionConnection[]; 
}
/* An edge in a connection. */
export interface wordpress__TAGEdge {
  node?: wordpress__TAG; /* The item at the end of the edge */
  next?: wordpress__TAG; /* The next edge in the connection */
  previous?: wordpress__TAG; /* The previous edge in the connection */
}
/* Node of type wordpress__TAG */
export interface wordpress__TAG extends Node {
  id: string; /* The id of this node. */
  parent?: Node; /* The parent of this node. */
  children?: Node[]; /* The children of this node. */
  wordpress_id?: number; 
  count?: number; 
  description?: string; 
  link?: string; 
  name?: string; 
  slug?: string; 
  _links?: links_17; 
  taxonomy?: wordpress__wp_taxonomies; 
  internal?: internal_26; 
}

export interface links_17 {
  self?: self_11[]; 
  collection?: collection_15[]; 
  about?: about_9[]; 
  wp_post_type?: wpPostType_5[]; 
  curies?: curies_11[]; 
}

export interface self_11 {
  href?: string; 
}

export interface collection_15 {
  href?: string; 
}

export interface about_9 {
  href?: string; 
}

export interface wpPostType_5 {
  href?: string; 
}

export interface curies_11 {
  name?: string; 
  href?: string; 
  templated?: boolean; 
}

export interface internal_26 {
  type?: string; 
  contentDigest?: string; 
  owner?: string; 
}
/* A connection to a list of items. */
export interface wordpressTagGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpressTagGroupConnectionEdge[]; /* A list of edges. */
  field?: string; 
  fieldValue?: string; 
  totalCount?: number; 
}
/* An edge in a connection. */
export interface wordpressTagGroupConnectionEdge {
  node?: wordpress__TAG; /* The item at the end of the edge */
  next?: wordpress__TAG; /* The next edge in the connection */
  previous?: wordpress__TAG; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface wordpress__wp_clientesConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpress__wp_clientesEdge[]; /* A list of edges. */
  totalCount?: number; 
  distinct?: string[]; 
  group?: wordpressWpClientesGroupConnectionConnection[]; 
}
/* An edge in a connection. */
export interface wordpress__wp_clientesEdge {
  node?: wordpress__wp_clientes; /* The item at the end of the edge */
  next?: wordpress__wp_clientes; /* The next edge in the connection */
  previous?: wordpress__wp_clientes; /* The previous edge in the connection */
}
/* Node of type wordpress__wp_clientes */
export interface wordpress__wp_clientes extends Node {
  id: string; /* The id of this node. */
  parent?: Node; /* The parent of this node. */
  children?: Node[]; /* The children of this node. */
  wordpress_id?: number; 
  count?: number; 
  description?: string; 
  link?: string; 
  name?: string; 
  slug?: string; 
  _links?: links_18; 
  taxonomy?: wordpress__wp_taxonomies; 
  internal?: internal_27; 
}

export interface links_18 {
  self?: self_12[]; 
  collection?: collection_16[]; 
  about?: about_10[]; 
  wp_post_type?: wpPostType_6[]; 
  curies?: curies_12[]; 
}

export interface self_12 {
  href?: string; 
}

export interface collection_16 {
  href?: string; 
}

export interface about_10 {
  href?: string; 
}

export interface wpPostType_6 {
  href?: string; 
}

export interface curies_12 {
  name?: string; 
  href?: string; 
  templated?: boolean; 
}

export interface internal_27 {
  type?: string; 
  contentDigest?: string; 
  owner?: string; 
}
/* A connection to a list of items. */
export interface wordpressWpClientesGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpressWpClientesGroupConnectionEdge[]; /* A list of edges. */
  field?: string; 
  fieldValue?: string; 
  totalCount?: number; 
}
/* An edge in a connection. */
export interface wordpressWpClientesGroupConnectionEdge {
  node?: wordpress__wp_clientes; /* The item at the end of the edge */
  next?: wordpress__wp_clientes; /* The next edge in the connection */
  previous?: wordpress__wp_clientes; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface wordpress__wp_usersConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpress__wp_usersEdge[]; /* A list of edges. */
  totalCount?: number; 
  distinct?: string[]; 
  group?: wordpressWpUsersGroupConnectionConnection[]; 
}
/* An edge in a connection. */
export interface wordpress__wp_usersEdge {
  node?: wordpress__wp_users; /* The item at the end of the edge */
  next?: wordpress__wp_users; /* The next edge in the connection */
  previous?: wordpress__wp_users; /* The previous edge in the connection */
}
/* A connection to a list of items. */
export interface wordpressWpUsersGroupConnectionConnection {
  pageInfo: PageInfo; /* Information to aid in pagination. */
  edges?: wordpressWpUsersGroupConnectionEdge[]; /* A list of edges. */
  field?: string; 
  fieldValue?: string; 
  totalCount?: number; 
}
/* An edge in a connection. */
export interface wordpressWpUsersGroupConnectionEdge {
  node?: wordpress__wp_users; /* The item at the end of the edge */
  next?: wordpress__wp_users; /* The next edge in the connection */
  previous?: wordpress__wp_users; /* The previous edge in the connection */
}
/* Node of type Site */
export interface Site extends Node {
  id: string; /* The id of this node. */
  parent?: Node; /* The parent of this node. */
  children?: Node[]; /* The children of this node. */
  siteMetadata?: siteMetadata_2; 
  port?: string; 
  host?: string; 
  pathPrefix?: string; 
  polyfill?: boolean; 
  buildTime?: string; 
  internal?: internal_28; 
}

export interface siteMetadata_2 {
  title?: string; 
  subtitle?: string; 
}

export interface internal_28 {
  contentDigest?: string; 
  type?: string; 
  owner?: string; 
}

export interface sitePageConnectionSort {
  fields: SitePageConnectionSortByFieldsEnum[]; 
  order?: sitePageConnectionSortOrderValues; 
}
/* Filter connection on its fields */
export interface filterSitePage {
  component?: sitePageConnectionComponentQueryString; 
  path?: sitePageConnectionPathQueryString_2; 
  componentChunkName?: sitePageConnectionComponentChunkNameQueryString; 
  layout?: sitePageConnectionLayoutQueryString; 
  jsonName?: sitePageConnectionJsonNameQueryString; 
  internalComponentName?: sitePageConnectionInternalComponentNameQueryString; 
  updatedAt?: sitePageConnectionUpdatedAtQueryInteger; 
  context?: sitePageConnectionContextInputObject; 
  pluginCreatorId?: sitePageConnectionPluginCreatorIdQueryString; 
  componentPath?: sitePageConnectionComponentPathQueryString; 
  id?: sitePageConnectionIdQueryString_2; 
  internal?: sitePageConnectionInternalInputObject_2; 
}

export interface sitePageConnectionComponentQueryString {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageConnectionPathQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageConnectionComponentChunkNameQueryString {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageConnectionLayoutQueryString {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageConnectionJsonNameQueryString {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageConnectionInternalComponentNameQueryString {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageConnectionUpdatedAtQueryInteger {
  eq?: number; 
  ne?: number; 
}

export interface sitePageConnectionContextInputObject {
  id?: sitePageConnectionContextIdQueryString; 
}

export interface sitePageConnectionContextIdQueryString {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageConnectionPluginCreatorIdQueryString {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageConnectionComponentPathQueryString {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageConnectionIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageConnectionInternalInputObject_2 {
  type?: sitePageConnectionInternalTypeQueryString_2; 
  contentDigest?: sitePageConnectionInternalContentDigestQueryString_2; 
  owner?: sitePageConnectionInternalOwnerQueryString_2; 
}

export interface sitePageConnectionInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageConnectionInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageConnectionInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionSort {
  fields: SitePluginConnectionSortByFieldsEnum[]; 
  order?: sitePluginConnectionSortOrderValues; 
}
/* Filter connection on its fields */
export interface filterSitePlugin {
  resolve?: sitePluginConnectionResolveQueryString_2; 
  id?: sitePluginConnectionIdQueryString_2; 
  name?: sitePluginConnectionNameQueryString_2; 
  version?: sitePluginConnectionVersionQueryString_2; 
  pluginOptions?: sitePluginConnectionPluginOptionsInputObject_2; 
  nodeAPIs?: sitePluginConnectionNodeApIsQueryList_2; 
  pluginFilepath?: sitePluginConnectionPluginFilepathQueryString_2; 
  packageJson?: sitePluginConnectionPackageJsonInputObject_2; 
  internal?: sitePluginConnectionInternalInputObject_2; 
}

export interface sitePluginConnectionResolveQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionVersionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionPluginOptionsInputObject_2 {
  baseUrl?: sitePluginConnectionPluginOptionsBaseUrlQueryString_2; 
  protocol?: sitePluginConnectionPluginOptionsProtocolQueryString_2; 
  hostingWPCOM?: sitePluginConnectionPluginOptionsHostingWpcomQueryBoolean_2; 
  useACF?: sitePluginConnectionPluginOptionsUseAcfQueryBoolean_2; 
  verboseOutput?: sitePluginConnectionPluginOptionsVerboseOutputQueryBoolean_2; 
}

export interface sitePluginConnectionPluginOptionsBaseUrlQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionPluginOptionsProtocolQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionPluginOptionsHostingWpcomQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface sitePluginConnectionPluginOptionsUseAcfQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface sitePluginConnectionPluginOptionsVerboseOutputQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface sitePluginConnectionNodeApIsQueryList_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
  in?: string[]; 
}

export interface sitePluginConnectionPluginFilepathQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionPackageJsonInputObject_2 {
  name?: sitePluginConnectionPackageJsonNameQueryString_2; 
  description?: sitePluginConnectionPackageJsonDescriptionQueryString_2; 
  version?: sitePluginConnectionPackageJsonVersionQueryString_2; 
  main?: sitePluginConnectionPackageJsonMainQueryString_2; 
  keywords?: sitePluginConnectionPackageJsonKeywordsQueryList_2; 
  license?: sitePluginConnectionPackageJsonLicenseQueryString_2; 
  dependencies?: sitePluginConnectionPackageJsonDependenciesQueryList_2; 
  devDependencies?: sitePluginConnectionPackageJsonDevDependenciesQueryList_2; 
}

export interface sitePluginConnectionPackageJsonNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionPackageJsonDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionPackageJsonVersionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionPackageJsonMainQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionPackageJsonKeywordsQueryList_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
  in?: string[]; 
}

export interface sitePluginConnectionPackageJsonLicenseQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionPackageJsonDependenciesQueryList_2 {
  in?: sitePluginConnectionPackageJsonDependenciesInputObject_2[]; 
}

export interface sitePluginConnectionPackageJsonDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDependenciesNameQueryString_2; 
  version?: sitePluginConnectionPackageJsonDependenciesVersionQueryString_2; 
}

export interface sitePluginConnectionPackageJsonDependenciesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionPackageJsonDependenciesVersionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionPackageJsonDevDependenciesQueryList_2 {
  in?: sitePluginConnectionPackageJsonDevDependenciesInputObject_2[]; 
}

export interface sitePluginConnectionPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2; 
  version?: sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2; 
}

export interface sitePluginConnectionPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionInternalInputObject_2 {
  contentDigest?: sitePluginConnectionInternalContentDigestQueryString_2; 
  type?: sitePluginConnectionInternalTypeQueryString_2; 
  owner?: sitePluginConnectionInternalOwnerQueryString_2; 
}

export interface sitePluginConnectionInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginConnectionInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionSort {
  fields: FileConnectionSortByFieldsEnum[]; 
  order?: fileConnectionSortOrderValues; 
}
/* Filter connection on its fields */
export interface filterFile {
  id?: fileConnectionIdQueryString_2; 
  internal?: fileConnectionInternalInputObject_2; 
  sourceInstanceName?: fileConnectionSourceInstanceNameQueryString_2; 
  absolutePath?: fileConnectionAbsolutePathQueryString_2; 
  relativePath?: fileConnectionRelativePathQueryString_2; 
  extension?: fileConnectionExtensionQueryString_2; 
  size?: fileConnectionSizeQueryInteger_2; 
  prettySize?: fileConnectionPrettySizeQueryString_2; 
  modifiedTime?: fileConnectionModifiedTimeQueryString_2; 
  accessTime?: fileConnectionAccessTimeQueryString_2; 
  changeTime?: fileConnectionChangeTimeQueryString_2; 
  birthTime?: fileConnectionBirthTimeQueryString_2; 
  root?: fileConnectionRootQueryString_2; 
  dir?: fileConnectionDirQueryString_2; 
  base?: fileConnectionBaseQueryString_2; 
  ext?: fileConnectionExtQueryString_2; 
  name?: fileConnectionNameQueryString_2; 
  relativeDirectory?: fileConnectionRelativeDirectoryQueryString_2; 
  dev?: fileConnectionDevQueryInteger_2; 
  mode?: fileConnectionModeQueryInteger_2; 
  nlink?: fileConnectionNlinkQueryInteger_2; 
  uid?: fileConnectionUidQueryInteger_2; 
  gid?: fileConnectionGidQueryInteger_2; 
  rdev?: fileConnectionRdevQueryInteger_2; 
  ino?: fileConnectionInoQueryInteger_2; 
  atimeMs?: fileConnectionAtimeMsQueryFloat_2; 
  mtimeMs?: fileConnectionMtimeMsQueryFloat_2; 
  ctimeMs?: fileConnectionCtimeMsQueryFloat_2; 
  birthtimeMs?: fileConnectionBirthtimeMsQueryFloat_2; 
  atime?: fileConnectionAtimeQueryString_2; 
  mtime?: fileConnectionMtimeQueryString_2; 
  ctime?: fileConnectionCtimeQueryString_2; 
  birthtime?: fileConnectionBirthtimeQueryString_2; 
}

export interface fileConnectionIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionInternalInputObject_2 {
  contentDigest?: fileConnectionInternalContentDigestQueryString_2; 
  mediaType?: fileConnectionInternalMediaTypeQueryString_2; 
  type?: fileConnectionInternalTypeQueryString_2; 
  owner?: fileConnectionInternalOwnerQueryString_2; 
}

export interface fileConnectionInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionInternalMediaTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionSourceInstanceNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionAbsolutePathQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionRelativePathQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionExtensionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionSizeQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileConnectionPrettySizeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionModifiedTimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionAccessTimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionChangeTimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionBirthTimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionRootQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionDirQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionBaseQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionExtQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionRelativeDirectoryQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionDevQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileConnectionModeQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileConnectionNlinkQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileConnectionUidQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileConnectionGidQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileConnectionRdevQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileConnectionInoQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileConnectionAtimeMsQueryFloat_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileConnectionMtimeMsQueryFloat_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileConnectionCtimeMsQueryFloat_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileConnectionBirthtimeMsQueryFloat_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileConnectionAtimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionMtimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionCtimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileConnectionBirthtimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface DuotoneGradient {
  highlight?: string; 
  shadow?: string; 
}

export interface Potrace {
  turnPolicy?: PotraceTurnPolicy; 
  turdSize?: number; 
  alphaMax?: number; 
  optCurve?: boolean; 
  optTolerance?: number; 
  threshold?: number; 
  blackOnWhite?: boolean; 
  color?: string; 
  background?: string; 
}

export interface imageSharpConnectionSort {
  fields: ImageSharpConnectionSortByFieldsEnum[]; 
  order?: imageSharpConnectionSortOrderValues; 
}
/* Filter connection on its fields */
export interface filterImageSharp {
  id?: imageSharpConnectionIdQueryString_2; 
  internal?: imageSharpConnectionInternalInputObject_2; 
  original?: originalTypeName_4; 
  resolutions?: resolutionsTypeName_4; 
  sizes?: sizesTypeName_4; 
  responsiveResolution?: responsiveResolutionTypeName_4; 
  responsiveSizes?: responsiveSizesTypeName_4; 
  resize?: resizeTypeName_4; 
}

export interface imageSharpConnectionIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface imageSharpConnectionInternalInputObject_2 {
  contentDigest?: imageSharpConnectionInternalContentDigestQueryString_2; 
  type?: imageSharpConnectionInternalTypeQueryString_2; 
  owner?: imageSharpConnectionInternalOwnerQueryString_2; 
}

export interface imageSharpConnectionInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface imageSharpConnectionInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface imageSharpConnectionInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface originalTypeName_4 {
  width?: originalWidthQueryFloat_4; 
  height?: originalHeightQueryFloat_4; 
  src?: originalSrcQueryString_4; 
}

export interface originalWidthQueryFloat_4 {
  eq?: number; 
  ne?: number; 
}

export interface originalHeightQueryFloat_4 {
  eq?: number; 
  ne?: number; 
}

export interface originalSrcQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resolutionsTypeName_4 {
  base64?: resolutionsBase64QueryString_4; 
  tracedSVG?: resolutionsTracedSvgQueryString_4; 
  aspectRatio?: resolutionsAspectRatioQueryFloat_4; 
  width?: resolutionsWidthQueryFloat_4; 
  height?: resolutionsHeightQueryFloat_4; 
  src?: resolutionsSrcQueryString_4; 
  srcSet?: resolutionsSrcSetQueryString_4; 
  srcWebp?: resolutionsSrcWebpQueryString_4; 
  srcSetWebp?: resolutionsSrcSetWebpQueryString_4; 
  originalName?: resolutionsOriginalNameQueryString_4; 
}

export interface resolutionsBase64QueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resolutionsTracedSvgQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resolutionsAspectRatioQueryFloat_4 {
  eq?: number; 
  ne?: number; 
}

export interface resolutionsWidthQueryFloat_4 {
  eq?: number; 
  ne?: number; 
}

export interface resolutionsHeightQueryFloat_4 {
  eq?: number; 
  ne?: number; 
}

export interface resolutionsSrcQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resolutionsSrcSetQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resolutionsSrcWebpQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resolutionsSrcSetWebpQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resolutionsOriginalNameQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesTypeName_4 {
  base64?: sizesBase64QueryString_4; 
  tracedSVG?: sizesTracedSvgQueryString_4; 
  aspectRatio?: sizesAspectRatioQueryFloat_4; 
  src?: sizesSrcQueryString_4; 
  srcSet?: sizesSrcSetQueryString_4; 
  srcWebp?: sizesSrcWebpQueryString_4; 
  srcSetWebp?: sizesSrcSetWebpQueryString_4; 
  sizes?: sizesSizesQueryString_4; 
  originalImg?: sizesOriginalImgQueryString_4; 
  originalName?: sizesOriginalNameQueryString_4; 
}

export interface sizesBase64QueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesTracedSvgQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesAspectRatioQueryFloat_4 {
  eq?: number; 
  ne?: number; 
}

export interface sizesSrcQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesSrcSetQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesSrcWebpQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesSrcSetWebpQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesSizesQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesOriginalImgQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesOriginalNameQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveResolutionTypeName_4 {
  base64?: responsiveResolutionBase64QueryString_4; 
  aspectRatio?: responsiveResolutionAspectRatioQueryFloat_4; 
  width?: responsiveResolutionWidthQueryFloat_4; 
  height?: responsiveResolutionHeightQueryFloat_4; 
  src?: responsiveResolutionSrcQueryString_4; 
  srcSet?: responsiveResolutionSrcSetQueryString_4; 
  originalName?: responsiveResolutionOriginalNameQueryString_4; 
}

export interface responsiveResolutionBase64QueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveResolutionAspectRatioQueryFloat_4 {
  eq?: number; 
  ne?: number; 
}

export interface responsiveResolutionWidthQueryFloat_4 {
  eq?: number; 
  ne?: number; 
}

export interface responsiveResolutionHeightQueryFloat_4 {
  eq?: number; 
  ne?: number; 
}

export interface responsiveResolutionSrcQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveResolutionSrcSetQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveResolutionOriginalNameQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveSizesTypeName_4 {
  base64?: responsiveSizesBase64QueryString_4; 
  aspectRatio?: responsiveSizesAspectRatioQueryFloat_4; 
  src?: responsiveSizesSrcQueryString_4; 
  srcSet?: responsiveSizesSrcSetQueryString_4; 
  sizes?: responsiveSizesSizesQueryString_4; 
  originalImg?: responsiveSizesOriginalImgQueryString_4; 
  originalName?: responsiveSizesOriginalNameQueryString_4; 
}

export interface responsiveSizesBase64QueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveSizesAspectRatioQueryFloat_4 {
  eq?: number; 
  ne?: number; 
}

export interface responsiveSizesSrcQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveSizesSrcSetQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveSizesSizesQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveSizesOriginalImgQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveSizesOriginalNameQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resizeTypeName_4 {
  src?: resizeSrcQueryString_4; 
  tracedSVG?: resizeTracedSvgQueryString_4; 
  width?: resizeWidthQueryInt_4; 
  height?: resizeHeightQueryInt_4; 
  aspectRatio?: resizeAspectRatioQueryFloat_4; 
  originalName?: resizeOriginalNameQueryString_4; 
}

export interface resizeSrcQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resizeTracedSvgQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resizeWidthQueryInt_4 {
  eq?: number; 
  ne?: number; 
}

export interface resizeHeightQueryInt_4 {
  eq?: number; 
  ne?: number; 
}

export interface resizeAspectRatioQueryFloat_4 {
  eq?: number; 
  ne?: number; 
}

export interface resizeOriginalNameQueryString_4 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionSort {
  fields: wordpress__wp_mediaConnectionSortByFieldsEnum[]; 
  order?: wordpressWpMediaConnectionSortOrderValues; 
}
/* Filter connection on its fields */
export interface filterWordpressWpMedia {
  wordpress_id?: wordpressWpMediaConnectionWordpressIdQueryInteger_2; 
  date?: wordpressWpMediaConnectionDateQueryString_2; 
  guid?: wordpressWpMediaConnectionGuidQueryString_2; 
  modified?: wordpressWpMediaConnectionModifiedQueryString_2; 
  slug?: wordpressWpMediaConnectionSlugQueryString_2; 
  status?: wordpressWpMediaConnectionStatusQueryString_2; 
  type?: wordpressWpMediaConnectionTypeQueryString_2; 
  link?: wordpressWpMediaConnectionLinkQueryString_2; 
  title?: wordpressWpMediaConnectionTitleQueryString_2; 
  comment_status?: wordpressWpMediaConnectionCommentStatusQueryString_2; 
  ping_status?: wordpressWpMediaConnectionPingStatusQueryString_2; 
  template?: wordpressWpMediaConnectionTemplateQueryString_2; 
  description?: wordpressWpMediaConnectionDescriptionQueryString_2; 
  caption?: wordpressWpMediaConnectionCaptionQueryString_2; 
  alt_text?: wordpressWpMediaConnectionAltTextQueryString_2; 
  media_type?: wordpressWpMediaConnectionMediaTypeQueryString_2; 
  mime_type?: wordpressWpMediaConnectionMimeTypeQueryString_2; 
  media_details?: wordpressWpMediaConnectionMediaDetailsInputObject_2; 
  post?: wordpressWpMediaConnectionPostQueryInteger_2; 
  source_url?: wordpressWpMediaConnectionSourceUrlQueryString_2; 
  _links?: wordpressWpMediaConnectionLinksInputObject_2; 
  id?: wordpressWpMediaConnectionIdQueryString_2; 
  internal?: wordpressWpMediaConnectionInternalInputObject_2; 
}

export interface wordpressWpMediaConnectionWordpressIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpMediaConnectionDateQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionGuidQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionModifiedQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionStatusQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionLinkQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionTitleQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionCommentStatusQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionPingStatusQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionTemplateQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionCaptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionAltTextQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionMediaTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionMimeTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionMediaDetailsInputObject_2 {
  width?: wordpressWpMediaConnectionMediaDetailsWidthQueryInteger_2; 
  height?: wordpressWpMediaConnectionMediaDetailsHeightQueryInteger_2; 
  file?: wordpressWpMediaConnectionMediaDetailsFileQueryString_2; 
  image_meta?: wordpressWpMediaConnectionMediaDetailsImageMetaInputObject_2; 
}

export interface wordpressWpMediaConnectionMediaDetailsWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpMediaConnectionMediaDetailsHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpMediaConnectionMediaDetailsFileQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionMediaDetailsImageMetaInputObject_2 {
  aperture?: wordpressWpMediaConnectionMediaDetailsImageMetaApertureQueryString_2; 
  credit?: wordpressWpMediaConnectionMediaDetailsImageMetaCreditQueryString_2; 
  camera?: wordpressWpMediaConnectionMediaDetailsImageMetaCameraQueryString_2; 
  caption?: wordpressWpMediaConnectionMediaDetailsImageMetaCaptionQueryString_2; 
  created_timestamp?: wordpressWpMediaConnectionMediaDetailsImageMetaCreatedTimestampQueryString_2; 
  copyright?: wordpressWpMediaConnectionMediaDetailsImageMetaCopyrightQueryString_2; 
  focal_length?: wordpressWpMediaConnectionMediaDetailsImageMetaFocalLengthQueryString_2; 
  iso?: wordpressWpMediaConnectionMediaDetailsImageMetaIsoQueryString_2; 
  shutter_speed?: wordpressWpMediaConnectionMediaDetailsImageMetaShutterSpeedQueryString_2; 
  title?: wordpressWpMediaConnectionMediaDetailsImageMetaTitleQueryString_2; 
  orientation?: wordpressWpMediaConnectionMediaDetailsImageMetaOrientationQueryString_2; 
  keywords?: wordpressWpMediaConnectionMediaDetailsImageMetaKeywordsQueryList_2; 
}

export interface wordpressWpMediaConnectionMediaDetailsImageMetaApertureQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionMediaDetailsImageMetaCreditQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionMediaDetailsImageMetaCameraQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionMediaDetailsImageMetaCaptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionMediaDetailsImageMetaCreatedTimestampQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionMediaDetailsImageMetaCopyrightQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionMediaDetailsImageMetaFocalLengthQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionMediaDetailsImageMetaIsoQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionMediaDetailsImageMetaShutterSpeedQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionMediaDetailsImageMetaTitleQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionMediaDetailsImageMetaOrientationQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionMediaDetailsImageMetaKeywordsQueryList_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
  in?: string[]; 
}

export interface wordpressWpMediaConnectionPostQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpMediaConnectionSourceUrlQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionLinksInputObject_2 {
  self?: wordpressWpMediaConnectionLinksSelfQueryList_2; 
  collection?: wordpressWpMediaConnectionLinksCollectionQueryList_2; 
  about?: wordpressWpMediaConnectionLinksAboutQueryList_2; 
  author?: wordpressWpMediaConnectionLinksAuthorQueryList_2; 
  replies?: wordpressWpMediaConnectionLinksRepliesQueryList_2; 
}

export interface wordpressWpMediaConnectionLinksSelfQueryList_2 {
  in?: wordpressWpMediaConnectionLinksSelfInputObject_2[]; 
}

export interface wordpressWpMediaConnectionLinksSelfInputObject_2 {
  href?: wordpressWpMediaConnectionLinksSelfHrefQueryString_2; 
}

export interface wordpressWpMediaConnectionLinksSelfHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionLinksCollectionQueryList_2 {
  in?: wordpressWpMediaConnectionLinksCollectionInputObject_2[]; 
}

export interface wordpressWpMediaConnectionLinksCollectionInputObject_2 {
  href?: wordpressWpMediaConnectionLinksCollectionHrefQueryString_2; 
}

export interface wordpressWpMediaConnectionLinksCollectionHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionLinksAboutQueryList_2 {
  in?: wordpressWpMediaConnectionLinksAboutInputObject_2[]; 
}

export interface wordpressWpMediaConnectionLinksAboutInputObject_2 {
  href?: wordpressWpMediaConnectionLinksAboutHrefQueryString_2; 
}

export interface wordpressWpMediaConnectionLinksAboutHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionLinksAuthorQueryList_2 {
  in?: wordpressWpMediaConnectionLinksAuthorInputObject_2[]; 
}

export interface wordpressWpMediaConnectionLinksAuthorInputObject_2 {
  embeddable?: wordpressWpMediaConnectionLinksAuthorEmbeddableQueryBoolean_2; 
  href?: wordpressWpMediaConnectionLinksAuthorHrefQueryString_2; 
}

export interface wordpressWpMediaConnectionLinksAuthorEmbeddableQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpMediaConnectionLinksAuthorHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionLinksRepliesQueryList_2 {
  in?: wordpressWpMediaConnectionLinksRepliesInputObject_2[]; 
}

export interface wordpressWpMediaConnectionLinksRepliesInputObject_2 {
  embeddable?: wordpressWpMediaConnectionLinksRepliesEmbeddableQueryBoolean_2; 
  href?: wordpressWpMediaConnectionLinksRepliesHrefQueryString_2; 
}

export interface wordpressWpMediaConnectionLinksRepliesEmbeddableQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpMediaConnectionLinksRepliesHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionInternalInputObject_2 {
  type?: wordpressWpMediaConnectionInternalTypeQueryString_2; 
  contentDigest?: wordpressWpMediaConnectionInternalContentDigestQueryString_2; 
  owner?: wordpressWpMediaConnectionInternalOwnerQueryString_2; 
}

export interface wordpressWpMediaConnectionInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaConnectionInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionSort {
  fields: wordpress__wp_trabajosConnectionSortByFieldsEnum[]; 
  order?: wordpressWpTrabajosConnectionSortOrderValues; 
}
/* Filter connection on its fields */
export interface filterWordpressWpTrabajos {
  wordpress_id?: wordpressWpTrabajosConnectionWordpressIdQueryInteger_2; 
  date?: wordpressWpTrabajosConnectionDateQueryString_2; 
  guid?: wordpressWpTrabajosConnectionGuidQueryString_2; 
  modified?: wordpressWpTrabajosConnectionModifiedQueryString_2; 
  slug?: wordpressWpTrabajosConnectionSlugQueryString_2; 
  status?: wordpressWpTrabajosConnectionStatusQueryString_2; 
  type?: wordpressWpTrabajosConnectionTypeQueryString_2; 
  link?: wordpressWpTrabajosConnectionLinkQueryString_2; 
  title?: wordpressWpTrabajosConnectionTitleQueryString_2; 
  template?: wordpressWpTrabajosConnectionTemplateQueryString_2; 
  tags?: wordpressWpTrabajosConnectionTagsQueryList_2; 
  clientes?: wordpressWpTrabajosConnectionClientesQueryList_2; 
  acf?: wordpressWpTrabajosConnectionAcfInputObject_2; 
  _links?: wordpressWpTrabajosConnectionLinksInputObject_2; 
  id?: wordpressWpTrabajosConnectionIdQueryString_2; 
  internal?: wordpressWpTrabajosConnectionInternalInputObject_2; 
}

export interface wordpressWpTrabajosConnectionWordpressIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionDateQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionGuidQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionModifiedQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionStatusQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionLinkQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionTitleQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionTemplateQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionTagsQueryList_2 {
  eq?: number; 
  ne?: number; 
  in?: number[]; 
}

export interface wordpressWpTrabajosConnectionClientesQueryList_2 {
  eq?: number; 
  ne?: number; 
  in?: number[]; 
}

export interface wordpressWpTrabajosConnectionAcfInputObject_2 {
  cliente?: wordpressWpTrabajosConnectionAcfClienteInputObject_2; 
  campana?: wordpressWpTrabajosConnectionAcfCampanaQueryString_2; 
  tipo?: wordpressWpTrabajosConnectionAcfTipoQueryList_2; 
  descripcion?: wordpressWpTrabajosConnectionAcfDescripcionQueryString_2; 
  imagen?: wordpressWpTrabajosConnectionAcfImagenInputObject_2; 
  piezas?: wordpressWpTrabajosConnectionAcfPiezasQueryList_2; 
}

export interface wordpressWpTrabajosConnectionAcfClienteInputObject_2 {
  term_id?: wordpressWpTrabajosConnectionAcfClienteTermIdQueryInteger_2; 
  name?: wordpressWpTrabajosConnectionAcfClienteNameQueryString_2; 
  slug?: wordpressWpTrabajosConnectionAcfClienteSlugQueryString_2; 
  term_group?: wordpressWpTrabajosConnectionAcfClienteTermGroupQueryInteger_2; 
  term_taxonomy_id?: wordpressWpTrabajosConnectionAcfClienteTermTaxonomyIdQueryInteger_2; 
  taxonomy?: wordpressWpTrabajosConnectionAcfClienteTaxonomyQueryString_2; 
  description?: wordpressWpTrabajosConnectionAcfClienteDescriptionQueryString_2; 
  wordpress_parent?: wordpressWpTrabajosConnectionAcfClienteWordpressParentQueryInteger_2; 
  count?: wordpressWpTrabajosConnectionAcfClienteCountQueryInteger_2; 
  filter?: wordpressWpTrabajosConnectionAcfClienteFilterQueryString_2; 
}

export interface wordpressWpTrabajosConnectionAcfClienteTermIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfClienteNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfClienteSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfClienteTermGroupQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfClienteTermTaxonomyIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfClienteTaxonomyQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfClienteDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfClienteWordpressParentQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfClienteCountQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfClienteFilterQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfCampanaQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfTipoQueryList_2 {
  in?: wordpressWpTrabajosConnectionAcfTipoInputObject_2[]; 
}

export interface wordpressWpTrabajosConnectionAcfTipoInputObject_2 {
  term_id?: wordpressWpTrabajosConnectionAcfTipoTermIdQueryInteger_2; 
  name?: wordpressWpTrabajosConnectionAcfTipoNameQueryString_2; 
  slug?: wordpressWpTrabajosConnectionAcfTipoSlugQueryString_2; 
  term_group?: wordpressWpTrabajosConnectionAcfTipoTermGroupQueryInteger_2; 
  term_taxonomy_id?: wordpressWpTrabajosConnectionAcfTipoTermTaxonomyIdQueryInteger_2; 
  taxonomy?: wordpressWpTrabajosConnectionAcfTipoTaxonomyQueryString_2; 
  description?: wordpressWpTrabajosConnectionAcfTipoDescriptionQueryString_2; 
  wordpress_parent?: wordpressWpTrabajosConnectionAcfTipoWordpressParentQueryInteger_2; 
  count?: wordpressWpTrabajosConnectionAcfTipoCountQueryInteger_2; 
  filter?: wordpressWpTrabajosConnectionAcfTipoFilterQueryString_2; 
}

export interface wordpressWpTrabajosConnectionAcfTipoTermIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfTipoNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfTipoSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfTipoTermGroupQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfTipoTermTaxonomyIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfTipoTaxonomyQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfTipoDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfTipoWordpressParentQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfTipoCountQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfTipoFilterQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfDescripcionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenInputObject_2 {
  wordpress_id?: wordpressWpTrabajosConnectionAcfImagenWordpressIdQueryInteger_2; 
  title?: wordpressWpTrabajosConnectionAcfImagenTitleQueryString_2; 
  filename?: wordpressWpTrabajosConnectionAcfImagenFilenameQueryString_2; 
  url?: wordpressWpTrabajosConnectionAcfImagenUrlQueryString_2; 
  alt?: wordpressWpTrabajosConnectionAcfImagenAltQueryString_2; 
  author?: wordpressWpTrabajosConnectionAcfImagenAuthorQueryString_2; 
  description?: wordpressWpTrabajosConnectionAcfImagenDescriptionQueryString_2; 
  caption?: wordpressWpTrabajosConnectionAcfImagenCaptionQueryString_2; 
  name?: wordpressWpTrabajosConnectionAcfImagenNameQueryString_2; 
  date?: wordpressWpTrabajosConnectionAcfImagenDateQueryString_2; 
  modified?: wordpressWpTrabajosConnectionAcfImagenModifiedQueryString_2; 
  mime_type?: wordpressWpTrabajosConnectionAcfImagenMimeTypeQueryString_2; 
  type?: wordpressWpTrabajosConnectionAcfImagenTypeQueryString_2; 
  icon?: wordpressWpTrabajosConnectionAcfImagenIconQueryString_2; 
  width?: wordpressWpTrabajosConnectionAcfImagenWidthQueryInteger_2; 
  height?: wordpressWpTrabajosConnectionAcfImagenHeightQueryInteger_2; 
  sizes?: wordpressWpTrabajosConnectionAcfImagenSizesInputObject_2; 
}

export interface wordpressWpTrabajosConnectionAcfImagenWordpressIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfImagenTitleQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenFilenameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenUrlQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenAltQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenAuthorQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenCaptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenDateQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenModifiedQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenMimeTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenIconQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfImagenHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfImagenSizesInputObject_2 {
  thumbnail?: wordpressWpTrabajosConnectionAcfImagenSizesThumbnailQueryString_2; 
  thumbnail_width?: wordpressWpTrabajosConnectionAcfImagenSizesThumbnailWidthQueryInteger_2; 
  thumbnail_height?: wordpressWpTrabajosConnectionAcfImagenSizesThumbnailHeightQueryInteger_2; 
  medium?: wordpressWpTrabajosConnectionAcfImagenSizesMediumQueryString_2; 
  medium_width?: wordpressWpTrabajosConnectionAcfImagenSizesMediumWidthQueryInteger_2; 
  medium_height?: wordpressWpTrabajosConnectionAcfImagenSizesMediumHeightQueryInteger_2; 
  medium_large?: wordpressWpTrabajosConnectionAcfImagenSizesMediumLargeQueryString_2; 
  medium_large_width?: wordpressWpTrabajosConnectionAcfImagenSizesMediumLargeWidthQueryInteger_2; 
  medium_large_height?: wordpressWpTrabajosConnectionAcfImagenSizesMediumLargeHeightQueryInteger_2; 
  large?: wordpressWpTrabajosConnectionAcfImagenSizesLargeQueryString_2; 
  large_width?: wordpressWpTrabajosConnectionAcfImagenSizesLargeWidthQueryInteger_2; 
  large_height?: wordpressWpTrabajosConnectionAcfImagenSizesLargeHeightQueryInteger_2; 
}

export interface wordpressWpTrabajosConnectionAcfImagenSizesThumbnailQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenSizesThumbnailWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfImagenSizesThumbnailHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfImagenSizesMediumQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenSizesMediumWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfImagenSizesMediumHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfImagenSizesMediumLargeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenSizesMediumLargeWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfImagenSizesMediumLargeHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfImagenSizesLargeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfImagenSizesLargeWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfImagenSizesLargeHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasQueryList_2 {
  in?: wordpressWpTrabajosConnectionAcfPiezasInputObject_2[]; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasInputObject_2 {
  url?: wordpressWpTrabajosConnectionAcfPiezasUrlQueryString_2; 
  imagen_de_la_pieza?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaInputObject_2; 
  tipo_de_pieza?: wordpressWpTrabajosConnectionAcfPiezasTipoDePiezaQueryString_2; 
  campana?: wordpressWpTrabajosConnectionAcfPiezasCampanaQueryString_2; 
  descripcion?: wordpressWpTrabajosConnectionAcfPiezasDescripcionQueryString_2; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasUrlQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaInputObject_2 {
  wordpress_id?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaWordpressIdQueryInteger_2; 
  title?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaTitleQueryString_2; 
  filename?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaFilenameQueryString_2; 
  url?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaUrlQueryString_2; 
  alt?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaAltQueryString_2; 
  author?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaAuthorQueryString_2; 
  description?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaDescriptionQueryString_2; 
  caption?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaCaptionQueryString_2; 
  name?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaNameQueryString_2; 
  date?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaDateQueryString_2; 
  modified?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaModifiedQueryString_2; 
  mime_type?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaMimeTypeQueryString_2; 
  type?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaTypeQueryString_2; 
  icon?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaIconQueryString_2; 
  width?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaWidthQueryInteger_2; 
  height?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaHeightQueryInteger_2; 
  sizes?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesInputObject_2; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaWordpressIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaTitleQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaFilenameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaUrlQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaAltQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaAuthorQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaCaptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaDateQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaModifiedQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaMimeTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaIconQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesInputObject_2 {
  thumbnail?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesThumbnailQueryString_2; 
  thumbnail_width?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesThumbnailWidthQueryInteger_2; 
  thumbnail_height?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesThumbnailHeightQueryInteger_2; 
  medium?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesMediumQueryString_2; 
  medium_width?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesMediumWidthQueryInteger_2; 
  medium_height?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesMediumHeightQueryInteger_2; 
  medium_large?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesMediumLargeQueryString_2; 
  medium_large_width?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesMediumLargeWidthQueryInteger_2; 
  medium_large_height?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesMediumLargeHeightQueryInteger_2; 
  large?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesLargeQueryString_2; 
  large_width?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesLargeWidthQueryInteger_2; 
  large_height?: wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesLargeHeightQueryInteger_2; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesThumbnailQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesThumbnailWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesThumbnailHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesMediumQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesMediumWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesMediumHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesMediumLargeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesMediumLargeWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesMediumLargeHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesLargeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesLargeWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasImagenDeLaPiezaSizesLargeHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasTipoDePiezaQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasCampanaQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionAcfPiezasDescripcionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionLinksInputObject_2 {
  self?: wordpressWpTrabajosConnectionLinksSelfQueryList_2; 
  collection?: wordpressWpTrabajosConnectionLinksCollectionQueryList_2; 
  about?: wordpressWpTrabajosConnectionLinksAboutQueryList_2; 
  wp_attachment?: wordpressWpTrabajosConnectionLinksWpAttachmentQueryList_2; 
  wp_term?: wordpressWpTrabajosConnectionLinksWpTermQueryList_2; 
  curies?: wordpressWpTrabajosConnectionLinksCuriesQueryList_2; 
}

export interface wordpressWpTrabajosConnectionLinksSelfQueryList_2 {
  in?: wordpressWpTrabajosConnectionLinksSelfInputObject_2[]; 
}

export interface wordpressWpTrabajosConnectionLinksSelfInputObject_2 {
  href?: wordpressWpTrabajosConnectionLinksSelfHrefQueryString_2; 
}

export interface wordpressWpTrabajosConnectionLinksSelfHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionLinksCollectionQueryList_2 {
  in?: wordpressWpTrabajosConnectionLinksCollectionInputObject_2[]; 
}

export interface wordpressWpTrabajosConnectionLinksCollectionInputObject_2 {
  href?: wordpressWpTrabajosConnectionLinksCollectionHrefQueryString_2; 
}

export interface wordpressWpTrabajosConnectionLinksCollectionHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionLinksAboutQueryList_2 {
  in?: wordpressWpTrabajosConnectionLinksAboutInputObject_2[]; 
}

export interface wordpressWpTrabajosConnectionLinksAboutInputObject_2 {
  href?: wordpressWpTrabajosConnectionLinksAboutHrefQueryString_2; 
}

export interface wordpressWpTrabajosConnectionLinksAboutHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionLinksWpAttachmentQueryList_2 {
  in?: wordpressWpTrabajosConnectionLinksWpAttachmentInputObject_2[]; 
}

export interface wordpressWpTrabajosConnectionLinksWpAttachmentInputObject_2 {
  href?: wordpressWpTrabajosConnectionLinksWpAttachmentHrefQueryString_2; 
}

export interface wordpressWpTrabajosConnectionLinksWpAttachmentHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionLinksWpTermQueryList_2 {
  in?: wordpressWpTrabajosConnectionLinksWpTermInputObject_2[]; 
}

export interface wordpressWpTrabajosConnectionLinksWpTermInputObject_2 {
  taxonomy?: wordpressWpTrabajosConnectionLinksWpTermTaxonomyQueryString_2; 
  embeddable?: wordpressWpTrabajosConnectionLinksWpTermEmbeddableQueryBoolean_2; 
  href?: wordpressWpTrabajosConnectionLinksWpTermHrefQueryString_2; 
}

export interface wordpressWpTrabajosConnectionLinksWpTermTaxonomyQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionLinksWpTermEmbeddableQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpTrabajosConnectionLinksWpTermHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionLinksCuriesQueryList_2 {
  in?: wordpressWpTrabajosConnectionLinksCuriesInputObject_2[]; 
}

export interface wordpressWpTrabajosConnectionLinksCuriesInputObject_2 {
  name?: wordpressWpTrabajosConnectionLinksCuriesNameQueryString_2; 
  href?: wordpressWpTrabajosConnectionLinksCuriesHrefQueryString_2; 
  templated?: wordpressWpTrabajosConnectionLinksCuriesTemplatedQueryBoolean_2; 
}

export interface wordpressWpTrabajosConnectionLinksCuriesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionLinksCuriesHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionLinksCuriesTemplatedQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpTrabajosConnectionIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionInternalInputObject_2 {
  type?: wordpressWpTrabajosConnectionInternalTypeQueryString_2; 
  contentDigest?: wordpressWpTrabajosConnectionInternalContentDigestQueryString_2; 
  owner?: wordpressWpTrabajosConnectionInternalOwnerQueryString_2; 
}

export interface wordpressWpTrabajosConnectionInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosConnectionInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesConnectionSort {
  fields: wordpress__wp_typesConnectionSortByFieldsEnum[]; 
  order?: wordpressWpTypesConnectionSortOrderValues; 
}
/* Filter connection on its fields */
export interface filterWordpressWpTypes {
  wordpress_id?: wordpressWpTypesConnectionWordpressIdQueryString_2; 
  description?: wordpressWpTypesConnectionDescriptionQueryString_2; 
  hierarchical?: wordpressWpTypesConnectionHierarchicalQueryBoolean_2; 
  name?: wordpressWpTypesConnectionNameQueryString_2; 
  slug?: wordpressWpTypesConnectionSlugQueryString_2; 
  taxonomies?: wordpressWpTypesConnectionTaxonomiesQueryList_2; 
  rest_base?: wordpressWpTypesConnectionRestBaseQueryString_2; 
  _links?: wordpressWpTypesConnectionLinksInputObject_2; 
  id?: wordpressWpTypesConnectionIdQueryString_2; 
  internal?: wordpressWpTypesConnectionInternalInputObject_2; 
}

export interface wordpressWpTypesConnectionWordpressIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesConnectionDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesConnectionHierarchicalQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpTypesConnectionNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesConnectionSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesConnectionTaxonomiesQueryList_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
  in?: string[]; 
}

export interface wordpressWpTypesConnectionRestBaseQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesConnectionLinksInputObject_2 {
  collection?: wordpressWpTypesConnectionLinksCollectionQueryList_2; 
  wp_items?: wordpressWpTypesConnectionLinksWpItemsQueryList_2; 
  curies?: wordpressWpTypesConnectionLinksCuriesQueryList_2; 
}

export interface wordpressWpTypesConnectionLinksCollectionQueryList_2 {
  in?: wordpressWpTypesConnectionLinksCollectionInputObject_2[]; 
}

export interface wordpressWpTypesConnectionLinksCollectionInputObject_2 {
  href?: wordpressWpTypesConnectionLinksCollectionHrefQueryString_2; 
}

export interface wordpressWpTypesConnectionLinksCollectionHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesConnectionLinksWpItemsQueryList_2 {
  in?: wordpressWpTypesConnectionLinksWpItemsInputObject_2[]; 
}

export interface wordpressWpTypesConnectionLinksWpItemsInputObject_2 {
  href?: wordpressWpTypesConnectionLinksWpItemsHrefQueryString_2; 
}

export interface wordpressWpTypesConnectionLinksWpItemsHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesConnectionLinksCuriesQueryList_2 {
  in?: wordpressWpTypesConnectionLinksCuriesInputObject_2[]; 
}

export interface wordpressWpTypesConnectionLinksCuriesInputObject_2 {
  name?: wordpressWpTypesConnectionLinksCuriesNameQueryString_2; 
  href?: wordpressWpTypesConnectionLinksCuriesHrefQueryString_2; 
  templated?: wordpressWpTypesConnectionLinksCuriesTemplatedQueryBoolean_2; 
}

export interface wordpressWpTypesConnectionLinksCuriesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesConnectionLinksCuriesHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesConnectionLinksCuriesTemplatedQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpTypesConnectionIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesConnectionInternalInputObject_2 {
  type?: wordpressWpTypesConnectionInternalTypeQueryString_2; 
  contentDigest?: wordpressWpTypesConnectionInternalContentDigestQueryString_2; 
  owner?: wordpressWpTypesConnectionInternalOwnerQueryString_2; 
}

export interface wordpressWpTypesConnectionInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesConnectionInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesConnectionInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpStatusesConnectionSort {
  fields: wordpress__wp_statusesConnectionSortByFieldsEnum[]; 
  order?: wordpressWpStatusesConnectionSortOrderValues; 
}
/* Filter connection on its fields */
export interface filterWordpressWpStatuses {
  wordpress_id?: wordpressWpStatusesConnectionWordpressIdQueryString_2; 
  name?: wordpressWpStatusesConnectionNameQueryString_2; 
  public?: wordpressWpStatusesConnectionPublicQueryBoolean_2; 
  queryable?: wordpressWpStatusesConnectionQueryableQueryBoolean_2; 
  slug?: wordpressWpStatusesConnectionSlugQueryString_2; 
  _links?: wordpressWpStatusesConnectionLinksInputObject_2; 
  id?: wordpressWpStatusesConnectionIdQueryString_2; 
  internal?: wordpressWpStatusesConnectionInternalInputObject_2; 
}

export interface wordpressWpStatusesConnectionWordpressIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpStatusesConnectionNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpStatusesConnectionPublicQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpStatusesConnectionQueryableQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpStatusesConnectionSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpStatusesConnectionLinksInputObject_2 {
  archives?: wordpressWpStatusesConnectionLinksArchivesQueryList_2; 
}

export interface wordpressWpStatusesConnectionLinksArchivesQueryList_2 {
  in?: wordpressWpStatusesConnectionLinksArchivesInputObject_2[]; 
}

export interface wordpressWpStatusesConnectionLinksArchivesInputObject_2 {
  href?: wordpressWpStatusesConnectionLinksArchivesHrefQueryString_2; 
}

export interface wordpressWpStatusesConnectionLinksArchivesHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpStatusesConnectionIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpStatusesConnectionInternalInputObject_2 {
  type?: wordpressWpStatusesConnectionInternalTypeQueryString_2; 
  contentDigest?: wordpressWpStatusesConnectionInternalContentDigestQueryString_2; 
  owner?: wordpressWpStatusesConnectionInternalOwnerQueryString_2; 
}

export interface wordpressWpStatusesConnectionInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpStatusesConnectionInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpStatusesConnectionInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesConnectionSort {
  fields: wordpress__wp_taxonomiesConnectionSortByFieldsEnum[]; 
  order?: wordpressWpTaxonomiesConnectionSortOrderValues; 
}
/* Filter connection on its fields */
export interface filterWordpressWpTaxonomies {
  wordpress_id?: wordpressWpTaxonomiesConnectionWordpressIdQueryString_2; 
  name?: wordpressWpTaxonomiesConnectionNameQueryString_2; 
  slug?: wordpressWpTaxonomiesConnectionSlugQueryString_2; 
  description?: wordpressWpTaxonomiesConnectionDescriptionQueryString_2; 
  types?: wordpressWpTaxonomiesConnectionTypesQueryList_2; 
  hierarchical?: wordpressWpTaxonomiesConnectionHierarchicalQueryBoolean_2; 
  rest_base?: wordpressWpTaxonomiesConnectionRestBaseQueryString_2; 
  _links?: wordpressWpTaxonomiesConnectionLinksInputObject_2; 
  id?: wordpressWpTaxonomiesConnectionIdQueryString_2; 
  internal?: wordpressWpTaxonomiesConnectionInternalInputObject_2; 
}

export interface wordpressWpTaxonomiesConnectionWordpressIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesConnectionNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesConnectionSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesConnectionDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesConnectionTypesQueryList_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
  in?: string[]; 
}

export interface wordpressWpTaxonomiesConnectionHierarchicalQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpTaxonomiesConnectionRestBaseQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesConnectionLinksInputObject_2 {
  collection?: wordpressWpTaxonomiesConnectionLinksCollectionQueryList_2; 
  wp_items?: wordpressWpTaxonomiesConnectionLinksWpItemsQueryList_2; 
  curies?: wordpressWpTaxonomiesConnectionLinksCuriesQueryList_2; 
}

export interface wordpressWpTaxonomiesConnectionLinksCollectionQueryList_2 {
  in?: wordpressWpTaxonomiesConnectionLinksCollectionInputObject_2[]; 
}

export interface wordpressWpTaxonomiesConnectionLinksCollectionInputObject_2 {
  href?: wordpressWpTaxonomiesConnectionLinksCollectionHrefQueryString_2; 
}

export interface wordpressWpTaxonomiesConnectionLinksCollectionHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesConnectionLinksWpItemsQueryList_2 {
  in?: wordpressWpTaxonomiesConnectionLinksWpItemsInputObject_2[]; 
}

export interface wordpressWpTaxonomiesConnectionLinksWpItemsInputObject_2 {
  href?: wordpressWpTaxonomiesConnectionLinksWpItemsHrefQueryString_2; 
}

export interface wordpressWpTaxonomiesConnectionLinksWpItemsHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesConnectionLinksCuriesQueryList_2 {
  in?: wordpressWpTaxonomiesConnectionLinksCuriesInputObject_2[]; 
}

export interface wordpressWpTaxonomiesConnectionLinksCuriesInputObject_2 {
  name?: wordpressWpTaxonomiesConnectionLinksCuriesNameQueryString_2; 
  href?: wordpressWpTaxonomiesConnectionLinksCuriesHrefQueryString_2; 
  templated?: wordpressWpTaxonomiesConnectionLinksCuriesTemplatedQueryBoolean_2; 
}

export interface wordpressWpTaxonomiesConnectionLinksCuriesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesConnectionLinksCuriesHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesConnectionLinksCuriesTemplatedQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpTaxonomiesConnectionIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesConnectionInternalInputObject_2 {
  type?: wordpressWpTaxonomiesConnectionInternalTypeQueryString_2; 
  contentDigest?: wordpressWpTaxonomiesConnectionInternalContentDigestQueryString_2; 
  owner?: wordpressWpTaxonomiesConnectionInternalOwnerQueryString_2; 
}

export interface wordpressWpTaxonomiesConnectionInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesConnectionInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesConnectionInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryConnectionSort {
  fields: wordpress__CATEGORYConnectionSortByFieldsEnum[]; 
  order?: wordpressCategoryConnectionSortOrderValues; 
}
/* Filter connection on its fields */
export interface filterWordpressCategory {
  wordpress_id?: wordpressCategoryConnectionWordpressIdQueryInteger_2; 
  count?: wordpressCategoryConnectionCountQueryInteger_2; 
  description?: wordpressCategoryConnectionDescriptionQueryString_2; 
  link?: wordpressCategoryConnectionLinkQueryString_2; 
  name?: wordpressCategoryConnectionNameQueryString_2; 
  slug?: wordpressCategoryConnectionSlugQueryString_2; 
  wordpress_parent?: wordpressCategoryConnectionWordpressParentQueryInteger_2; 
  _links?: wordpressCategoryConnectionLinksInputObject_2; 
  id?: wordpressCategoryConnectionIdQueryString_2; 
  internal?: wordpressCategoryConnectionInternalInputObject_2; 
}

export interface wordpressCategoryConnectionWordpressIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressCategoryConnectionCountQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressCategoryConnectionDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryConnectionLinkQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryConnectionNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryConnectionSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryConnectionWordpressParentQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressCategoryConnectionLinksInputObject_2 {
  self?: wordpressCategoryConnectionLinksSelfQueryList_2; 
  collection?: wordpressCategoryConnectionLinksCollectionQueryList_2; 
  about?: wordpressCategoryConnectionLinksAboutQueryList_2; 
  wp_post_type?: wordpressCategoryConnectionLinksWpPostTypeQueryList_2; 
  curies?: wordpressCategoryConnectionLinksCuriesQueryList_2; 
}

export interface wordpressCategoryConnectionLinksSelfQueryList_2 {
  in?: wordpressCategoryConnectionLinksSelfInputObject_2[]; 
}

export interface wordpressCategoryConnectionLinksSelfInputObject_2 {
  href?: wordpressCategoryConnectionLinksSelfHrefQueryString_2; 
}

export interface wordpressCategoryConnectionLinksSelfHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryConnectionLinksCollectionQueryList_2 {
  in?: wordpressCategoryConnectionLinksCollectionInputObject_2[]; 
}

export interface wordpressCategoryConnectionLinksCollectionInputObject_2 {
  href?: wordpressCategoryConnectionLinksCollectionHrefQueryString_2; 
}

export interface wordpressCategoryConnectionLinksCollectionHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryConnectionLinksAboutQueryList_2 {
  in?: wordpressCategoryConnectionLinksAboutInputObject_2[]; 
}

export interface wordpressCategoryConnectionLinksAboutInputObject_2 {
  href?: wordpressCategoryConnectionLinksAboutHrefQueryString_2; 
}

export interface wordpressCategoryConnectionLinksAboutHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryConnectionLinksWpPostTypeQueryList_2 {
  in?: wordpressCategoryConnectionLinksWpPostTypeInputObject_2[]; 
}

export interface wordpressCategoryConnectionLinksWpPostTypeInputObject_2 {
  href?: wordpressCategoryConnectionLinksWpPostTypeHrefQueryString_2; 
}

export interface wordpressCategoryConnectionLinksWpPostTypeHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryConnectionLinksCuriesQueryList_2 {
  in?: wordpressCategoryConnectionLinksCuriesInputObject_2[]; 
}

export interface wordpressCategoryConnectionLinksCuriesInputObject_2 {
  name?: wordpressCategoryConnectionLinksCuriesNameQueryString_2; 
  href?: wordpressCategoryConnectionLinksCuriesHrefQueryString_2; 
  templated?: wordpressCategoryConnectionLinksCuriesTemplatedQueryBoolean_2; 
}

export interface wordpressCategoryConnectionLinksCuriesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryConnectionLinksCuriesHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryConnectionLinksCuriesTemplatedQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressCategoryConnectionIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryConnectionInternalInputObject_2 {
  type?: wordpressCategoryConnectionInternalTypeQueryString_2; 
  contentDigest?: wordpressCategoryConnectionInternalContentDigestQueryString_2; 
  owner?: wordpressCategoryConnectionInternalOwnerQueryString_2; 
}

export interface wordpressCategoryConnectionInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryConnectionInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryConnectionInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagConnectionSort {
  fields: wordpress__TAGConnectionSortByFieldsEnum[]; 
  order?: wordpressTagConnectionSortOrderValues; 
}
/* Filter connection on its fields */
export interface filterWordpressTag {
  wordpress_id?: wordpressTagConnectionWordpressIdQueryInteger_2; 
  count?: wordpressTagConnectionCountQueryInteger_2; 
  description?: wordpressTagConnectionDescriptionQueryString_2; 
  link?: wordpressTagConnectionLinkQueryString_2; 
  name?: wordpressTagConnectionNameQueryString_2; 
  slug?: wordpressTagConnectionSlugQueryString_2; 
  _links?: wordpressTagConnectionLinksInputObject_2; 
  id?: wordpressTagConnectionIdQueryString_2; 
  internal?: wordpressTagConnectionInternalInputObject_2; 
}

export interface wordpressTagConnectionWordpressIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressTagConnectionCountQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressTagConnectionDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagConnectionLinkQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagConnectionNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagConnectionSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagConnectionLinksInputObject_2 {
  self?: wordpressTagConnectionLinksSelfQueryList_2; 
  collection?: wordpressTagConnectionLinksCollectionQueryList_2; 
  about?: wordpressTagConnectionLinksAboutQueryList_2; 
  wp_post_type?: wordpressTagConnectionLinksWpPostTypeQueryList_2; 
  curies?: wordpressTagConnectionLinksCuriesQueryList_2; 
}

export interface wordpressTagConnectionLinksSelfQueryList_2 {
  in?: wordpressTagConnectionLinksSelfInputObject_2[]; 
}

export interface wordpressTagConnectionLinksSelfInputObject_2 {
  href?: wordpressTagConnectionLinksSelfHrefQueryString_2; 
}

export interface wordpressTagConnectionLinksSelfHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagConnectionLinksCollectionQueryList_2 {
  in?: wordpressTagConnectionLinksCollectionInputObject_2[]; 
}

export interface wordpressTagConnectionLinksCollectionInputObject_2 {
  href?: wordpressTagConnectionLinksCollectionHrefQueryString_2; 
}

export interface wordpressTagConnectionLinksCollectionHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagConnectionLinksAboutQueryList_2 {
  in?: wordpressTagConnectionLinksAboutInputObject_2[]; 
}

export interface wordpressTagConnectionLinksAboutInputObject_2 {
  href?: wordpressTagConnectionLinksAboutHrefQueryString_2; 
}

export interface wordpressTagConnectionLinksAboutHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagConnectionLinksWpPostTypeQueryList_2 {
  in?: wordpressTagConnectionLinksWpPostTypeInputObject_2[]; 
}

export interface wordpressTagConnectionLinksWpPostTypeInputObject_2 {
  href?: wordpressTagConnectionLinksWpPostTypeHrefQueryString_2; 
}

export interface wordpressTagConnectionLinksWpPostTypeHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagConnectionLinksCuriesQueryList_2 {
  in?: wordpressTagConnectionLinksCuriesInputObject_2[]; 
}

export interface wordpressTagConnectionLinksCuriesInputObject_2 {
  name?: wordpressTagConnectionLinksCuriesNameQueryString_2; 
  href?: wordpressTagConnectionLinksCuriesHrefQueryString_2; 
  templated?: wordpressTagConnectionLinksCuriesTemplatedQueryBoolean_2; 
}

export interface wordpressTagConnectionLinksCuriesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagConnectionLinksCuriesHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagConnectionLinksCuriesTemplatedQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressTagConnectionIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagConnectionInternalInputObject_2 {
  type?: wordpressTagConnectionInternalTypeQueryString_2; 
  contentDigest?: wordpressTagConnectionInternalContentDigestQueryString_2; 
  owner?: wordpressTagConnectionInternalOwnerQueryString_2; 
}

export interface wordpressTagConnectionInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagConnectionInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagConnectionInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesConnectionSort {
  fields: wordpress__wp_clientesConnectionSortByFieldsEnum[]; 
  order?: wordpressWpClientesConnectionSortOrderValues; 
}
/* Filter connection on its fields */
export interface filterWordpressWpClientes {
  wordpress_id?: wordpressWpClientesConnectionWordpressIdQueryInteger_2; 
  count?: wordpressWpClientesConnectionCountQueryInteger_2; 
  description?: wordpressWpClientesConnectionDescriptionQueryString_2; 
  link?: wordpressWpClientesConnectionLinkQueryString_2; 
  name?: wordpressWpClientesConnectionNameQueryString_2; 
  slug?: wordpressWpClientesConnectionSlugQueryString_2; 
  _links?: wordpressWpClientesConnectionLinksInputObject_2; 
  id?: wordpressWpClientesConnectionIdQueryString_2; 
  internal?: wordpressWpClientesConnectionInternalInputObject_2; 
}

export interface wordpressWpClientesConnectionWordpressIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpClientesConnectionCountQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpClientesConnectionDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesConnectionLinkQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesConnectionNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesConnectionSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesConnectionLinksInputObject_2 {
  self?: wordpressWpClientesConnectionLinksSelfQueryList_2; 
  collection?: wordpressWpClientesConnectionLinksCollectionQueryList_2; 
  about?: wordpressWpClientesConnectionLinksAboutQueryList_2; 
  wp_post_type?: wordpressWpClientesConnectionLinksWpPostTypeQueryList_2; 
  curies?: wordpressWpClientesConnectionLinksCuriesQueryList_2; 
}

export interface wordpressWpClientesConnectionLinksSelfQueryList_2 {
  in?: wordpressWpClientesConnectionLinksSelfInputObject_2[]; 
}

export interface wordpressWpClientesConnectionLinksSelfInputObject_2 {
  href?: wordpressWpClientesConnectionLinksSelfHrefQueryString_2; 
}

export interface wordpressWpClientesConnectionLinksSelfHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesConnectionLinksCollectionQueryList_2 {
  in?: wordpressWpClientesConnectionLinksCollectionInputObject_2[]; 
}

export interface wordpressWpClientesConnectionLinksCollectionInputObject_2 {
  href?: wordpressWpClientesConnectionLinksCollectionHrefQueryString_2; 
}

export interface wordpressWpClientesConnectionLinksCollectionHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesConnectionLinksAboutQueryList_2 {
  in?: wordpressWpClientesConnectionLinksAboutInputObject_2[]; 
}

export interface wordpressWpClientesConnectionLinksAboutInputObject_2 {
  href?: wordpressWpClientesConnectionLinksAboutHrefQueryString_2; 
}

export interface wordpressWpClientesConnectionLinksAboutHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesConnectionLinksWpPostTypeQueryList_2 {
  in?: wordpressWpClientesConnectionLinksWpPostTypeInputObject_2[]; 
}

export interface wordpressWpClientesConnectionLinksWpPostTypeInputObject_2 {
  href?: wordpressWpClientesConnectionLinksWpPostTypeHrefQueryString_2; 
}

export interface wordpressWpClientesConnectionLinksWpPostTypeHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesConnectionLinksCuriesQueryList_2 {
  in?: wordpressWpClientesConnectionLinksCuriesInputObject_2[]; 
}

export interface wordpressWpClientesConnectionLinksCuriesInputObject_2 {
  name?: wordpressWpClientesConnectionLinksCuriesNameQueryString_2; 
  href?: wordpressWpClientesConnectionLinksCuriesHrefQueryString_2; 
  templated?: wordpressWpClientesConnectionLinksCuriesTemplatedQueryBoolean_2; 
}

export interface wordpressWpClientesConnectionLinksCuriesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesConnectionLinksCuriesHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesConnectionLinksCuriesTemplatedQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpClientesConnectionIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesConnectionInternalInputObject_2 {
  type?: wordpressWpClientesConnectionInternalTypeQueryString_2; 
  contentDigest?: wordpressWpClientesConnectionInternalContentDigestQueryString_2; 
  owner?: wordpressWpClientesConnectionInternalOwnerQueryString_2; 
}

export interface wordpressWpClientesConnectionInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesConnectionInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesConnectionInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersConnectionSort {
  fields: wordpress__wp_usersConnectionSortByFieldsEnum[]; 
  order?: wordpressWpUsersConnectionSortOrderValues; 
}
/* Filter connection on its fields */
export interface filterWordpressWpUsers {
  wordpress_id?: wordpressWpUsersConnectionWordpressIdQueryInteger_2; 
  name?: wordpressWpUsersConnectionNameQueryString_2; 
  url?: wordpressWpUsersConnectionUrlQueryString_2; 
  description?: wordpressWpUsersConnectionDescriptionQueryString_2; 
  link?: wordpressWpUsersConnectionLinkQueryString_2; 
  slug?: wordpressWpUsersConnectionSlugQueryString_2; 
  _links?: wordpressWpUsersConnectionLinksInputObject_2; 
  id?: wordpressWpUsersConnectionIdQueryString_2; 
  internal?: wordpressWpUsersConnectionInternalInputObject_2; 
}

export interface wordpressWpUsersConnectionWordpressIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpUsersConnectionNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersConnectionUrlQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersConnectionDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersConnectionLinkQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersConnectionSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersConnectionLinksInputObject_2 {
  self?: wordpressWpUsersConnectionLinksSelfQueryList_2; 
  collection?: wordpressWpUsersConnectionLinksCollectionQueryList_2; 
}

export interface wordpressWpUsersConnectionLinksSelfQueryList_2 {
  in?: wordpressWpUsersConnectionLinksSelfInputObject_2[]; 
}

export interface wordpressWpUsersConnectionLinksSelfInputObject_2 {
  href?: wordpressWpUsersConnectionLinksSelfHrefQueryString_2; 
}

export interface wordpressWpUsersConnectionLinksSelfHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersConnectionLinksCollectionQueryList_2 {
  in?: wordpressWpUsersConnectionLinksCollectionInputObject_2[]; 
}

export interface wordpressWpUsersConnectionLinksCollectionInputObject_2 {
  href?: wordpressWpUsersConnectionLinksCollectionHrefQueryString_2; 
}

export interface wordpressWpUsersConnectionLinksCollectionHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersConnectionIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersConnectionInternalInputObject_2 {
  type?: wordpressWpUsersConnectionInternalTypeQueryString_2; 
  contentDigest?: wordpressWpUsersConnectionInternalContentDigestQueryString_2; 
  owner?: wordpressWpUsersConnectionInternalOwnerQueryString_2; 
}

export interface wordpressWpUsersConnectionInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersConnectionInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersConnectionInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageComponentQueryString {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePagePathQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageComponentChunkNameQueryString {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageLayoutQueryString {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageJsonNameQueryString {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageInternalComponentNameQueryString {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageUpdatedAtQueryInteger {
  eq?: number; 
  ne?: number; 
}

export interface sitePageContextInputObject {
  id?: sitePageContextIdQueryString; 
}

export interface sitePageContextIdQueryString {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePagePluginCreatorIdQueryString {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageComponentPathQueryString {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageInternalInputObject_2 {
  type?: sitePageInternalTypeQueryString_2; 
  contentDigest?: sitePageInternalContentDigestQueryString_2; 
  owner?: sitePageInternalOwnerQueryString_2; 
}

export interface sitePageInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePageInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginResolveQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginVersionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginPluginOptionsInputObject_2 {
  baseUrl?: sitePluginPluginOptionsBaseUrlQueryString_2; 
  protocol?: sitePluginPluginOptionsProtocolQueryString_2; 
  hostingWPCOM?: sitePluginPluginOptionsHostingWpcomQueryBoolean_2; 
  useACF?: sitePluginPluginOptionsUseAcfQueryBoolean_2; 
  verboseOutput?: sitePluginPluginOptionsVerboseOutputQueryBoolean_2; 
}

export interface sitePluginPluginOptionsBaseUrlQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginPluginOptionsProtocolQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginPluginOptionsHostingWpcomQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface sitePluginPluginOptionsUseAcfQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface sitePluginPluginOptionsVerboseOutputQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface sitePluginNodeApIsQueryList_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
  in?: string[]; 
}

export interface sitePluginPluginFilepathQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginPackageJsonInputObject_2 {
  name?: sitePluginPackageJsonNameQueryString_2; 
  description?: sitePluginPackageJsonDescriptionQueryString_2; 
  version?: sitePluginPackageJsonVersionQueryString_2; 
  main?: sitePluginPackageJsonMainQueryString_2; 
  keywords?: sitePluginPackageJsonKeywordsQueryList_2; 
  license?: sitePluginPackageJsonLicenseQueryString_2; 
  dependencies?: sitePluginPackageJsonDependenciesQueryList_2; 
  devDependencies?: sitePluginPackageJsonDevDependenciesQueryList_2; 
}

export interface sitePluginPackageJsonNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginPackageJsonDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginPackageJsonVersionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginPackageJsonMainQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginPackageJsonKeywordsQueryList_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
  in?: string[]; 
}

export interface sitePluginPackageJsonLicenseQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginPackageJsonDependenciesQueryList_2 {
  in?: sitePluginPackageJsonDependenciesInputObject_2[]; 
}

export interface sitePluginPackageJsonDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDependenciesNameQueryString_2; 
  version?: sitePluginPackageJsonDependenciesVersionQueryString_2; 
}

export interface sitePluginPackageJsonDependenciesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginPackageJsonDependenciesVersionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginPackageJsonDevDependenciesQueryList_2 {
  in?: sitePluginPackageJsonDevDependenciesInputObject_2[]; 
}

export interface sitePluginPackageJsonDevDependenciesInputObject_2 {
  name?: sitePluginPackageJsonDevDependenciesNameQueryString_2; 
  version?: sitePluginPackageJsonDevDependenciesVersionQueryString_2; 
}

export interface sitePluginPackageJsonDevDependenciesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginPackageJsonDevDependenciesVersionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginInternalInputObject_2 {
  contentDigest?: sitePluginInternalContentDigestQueryString_2; 
  type?: sitePluginInternalTypeQueryString_2; 
  owner?: sitePluginInternalOwnerQueryString_2; 
}

export interface sitePluginInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePluginInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface siteSiteMetadataInputObject_2 {
  title?: siteSiteMetadataTitleQueryString_2; 
  subtitle?: siteSiteMetadataSubtitleQueryString_2; 
}

export interface siteSiteMetadataTitleQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface siteSiteMetadataSubtitleQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePortQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface siteHostQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePathPrefixQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sitePolyfillQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface siteBuildTimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface siteIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface siteInternalInputObject_2 {
  contentDigest?: siteInternalContentDigestQueryString_2; 
  type?: siteInternalTypeQueryString_2; 
  owner?: siteInternalOwnerQueryString_2; 
}

export interface siteInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface siteInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface siteInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileInternalInputObject_2 {
  contentDigest?: fileInternalContentDigestQueryString_2; 
  mediaType?: fileInternalMediaTypeQueryString_2; 
  type?: fileInternalTypeQueryString_2; 
  owner?: fileInternalOwnerQueryString_2; 
}

export interface fileInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileInternalMediaTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileSourceInstanceNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileAbsolutePathQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileRelativePathQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileExtensionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileSizeQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface filePrettySizeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileModifiedTimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileAccessTimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileChangeTimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileBirthTimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileRootQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileDirQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileBaseQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileExtQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileRelativeDirectoryQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileDevQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileModeQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileNlinkQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileUidQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileGidQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileRdevQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileInoQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileAtimeMsQueryFloat_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileMtimeMsQueryFloat_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileCtimeMsQueryFloat_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileBirthtimeMsQueryFloat_2 {
  eq?: number; 
  ne?: number; 
}

export interface fileAtimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileMtimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileCtimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface fileBirthtimeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface imageSharpIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface imageSharpInternalInputObject_2 {
  contentDigest?: imageSharpInternalContentDigestQueryString_2; 
  type?: imageSharpInternalTypeQueryString_2; 
  owner?: imageSharpInternalOwnerQueryString_2; 
}

export interface imageSharpInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface imageSharpInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface imageSharpInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface originalTypeName_3 {
  width?: originalWidthQueryFloat_3; 
  height?: originalHeightQueryFloat_3; 
  src?: originalSrcQueryString_3; 
}

export interface originalWidthQueryFloat_3 {
  eq?: number; 
  ne?: number; 
}

export interface originalHeightQueryFloat_3 {
  eq?: number; 
  ne?: number; 
}

export interface originalSrcQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resolutionsTypeName_3 {
  base64?: resolutionsBase64QueryString_3; 
  tracedSVG?: resolutionsTracedSvgQueryString_3; 
  aspectRatio?: resolutionsAspectRatioQueryFloat_3; 
  width?: resolutionsWidthQueryFloat_3; 
  height?: resolutionsHeightQueryFloat_3; 
  src?: resolutionsSrcQueryString_3; 
  srcSet?: resolutionsSrcSetQueryString_3; 
  srcWebp?: resolutionsSrcWebpQueryString_3; 
  srcSetWebp?: resolutionsSrcSetWebpQueryString_3; 
  originalName?: resolutionsOriginalNameQueryString_3; 
}

export interface resolutionsBase64QueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resolutionsTracedSvgQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resolutionsAspectRatioQueryFloat_3 {
  eq?: number; 
  ne?: number; 
}

export interface resolutionsWidthQueryFloat_3 {
  eq?: number; 
  ne?: number; 
}

export interface resolutionsHeightQueryFloat_3 {
  eq?: number; 
  ne?: number; 
}

export interface resolutionsSrcQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resolutionsSrcSetQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resolutionsSrcWebpQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resolutionsSrcSetWebpQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resolutionsOriginalNameQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesTypeName_3 {
  base64?: sizesBase64QueryString_3; 
  tracedSVG?: sizesTracedSvgQueryString_3; 
  aspectRatio?: sizesAspectRatioQueryFloat_3; 
  src?: sizesSrcQueryString_3; 
  srcSet?: sizesSrcSetQueryString_3; 
  srcWebp?: sizesSrcWebpQueryString_3; 
  srcSetWebp?: sizesSrcSetWebpQueryString_3; 
  sizes?: sizesSizesQueryString_3; 
  originalImg?: sizesOriginalImgQueryString_3; 
  originalName?: sizesOriginalNameQueryString_3; 
}

export interface sizesBase64QueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesTracedSvgQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesAspectRatioQueryFloat_3 {
  eq?: number; 
  ne?: number; 
}

export interface sizesSrcQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesSrcSetQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesSrcWebpQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesSrcSetWebpQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesSizesQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesOriginalImgQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface sizesOriginalNameQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveResolutionTypeName_3 {
  base64?: responsiveResolutionBase64QueryString_3; 
  aspectRatio?: responsiveResolutionAspectRatioQueryFloat_3; 
  width?: responsiveResolutionWidthQueryFloat_3; 
  height?: responsiveResolutionHeightQueryFloat_3; 
  src?: responsiveResolutionSrcQueryString_3; 
  srcSet?: responsiveResolutionSrcSetQueryString_3; 
  originalName?: responsiveResolutionOriginalNameQueryString_3; 
}

export interface responsiveResolutionBase64QueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveResolutionAspectRatioQueryFloat_3 {
  eq?: number; 
  ne?: number; 
}

export interface responsiveResolutionWidthQueryFloat_3 {
  eq?: number; 
  ne?: number; 
}

export interface responsiveResolutionHeightQueryFloat_3 {
  eq?: number; 
  ne?: number; 
}

export interface responsiveResolutionSrcQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveResolutionSrcSetQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveResolutionOriginalNameQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveSizesTypeName_3 {
  base64?: responsiveSizesBase64QueryString_3; 
  aspectRatio?: responsiveSizesAspectRatioQueryFloat_3; 
  src?: responsiveSizesSrcQueryString_3; 
  srcSet?: responsiveSizesSrcSetQueryString_3; 
  sizes?: responsiveSizesSizesQueryString_3; 
  originalImg?: responsiveSizesOriginalImgQueryString_3; 
  originalName?: responsiveSizesOriginalNameQueryString_3; 
}

export interface responsiveSizesBase64QueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveSizesAspectRatioQueryFloat_3 {
  eq?: number; 
  ne?: number; 
}

export interface responsiveSizesSrcQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveSizesSrcSetQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveSizesSizesQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveSizesOriginalImgQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface responsiveSizesOriginalNameQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resizeTypeName_3 {
  src?: resizeSrcQueryString_3; 
  tracedSVG?: resizeTracedSvgQueryString_3; 
  width?: resizeWidthQueryInt_3; 
  height?: resizeHeightQueryInt_3; 
  aspectRatio?: resizeAspectRatioQueryFloat_3; 
  originalName?: resizeOriginalNameQueryString_3; 
}

export interface resizeSrcQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resizeTracedSvgQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface resizeWidthQueryInt_3 {
  eq?: number; 
  ne?: number; 
}

export interface resizeHeightQueryInt_3 {
  eq?: number; 
  ne?: number; 
}

export interface resizeAspectRatioQueryFloat_3 {
  eq?: number; 
  ne?: number; 
}

export interface resizeOriginalNameQueryString_3 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaWordpressIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpMediaDateQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaGuidQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaModifiedQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaStatusQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaLinkQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaTitleQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaCommentStatusQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaPingStatusQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaTemplateQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaCaptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaAltTextQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaMediaTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaMimeTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaMediaDetailsInputObject_2 {
  width?: wordpressWpMediaMediaDetailsWidthQueryInteger_2; 
  height?: wordpressWpMediaMediaDetailsHeightQueryInteger_2; 
  file?: wordpressWpMediaMediaDetailsFileQueryString_2; 
  image_meta?: wordpressWpMediaMediaDetailsImageMetaInputObject_2; 
}

export interface wordpressWpMediaMediaDetailsWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpMediaMediaDetailsHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpMediaMediaDetailsFileQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaMediaDetailsImageMetaInputObject_2 {
  aperture?: wordpressWpMediaMediaDetailsImageMetaApertureQueryString_2; 
  credit?: wordpressWpMediaMediaDetailsImageMetaCreditQueryString_2; 
  camera?: wordpressWpMediaMediaDetailsImageMetaCameraQueryString_2; 
  caption?: wordpressWpMediaMediaDetailsImageMetaCaptionQueryString_2; 
  created_timestamp?: wordpressWpMediaMediaDetailsImageMetaCreatedTimestampQueryString_2; 
  copyright?: wordpressWpMediaMediaDetailsImageMetaCopyrightQueryString_2; 
  focal_length?: wordpressWpMediaMediaDetailsImageMetaFocalLengthQueryString_2; 
  iso?: wordpressWpMediaMediaDetailsImageMetaIsoQueryString_2; 
  shutter_speed?: wordpressWpMediaMediaDetailsImageMetaShutterSpeedQueryString_2; 
  title?: wordpressWpMediaMediaDetailsImageMetaTitleQueryString_2; 
  orientation?: wordpressWpMediaMediaDetailsImageMetaOrientationQueryString_2; 
  keywords?: wordpressWpMediaMediaDetailsImageMetaKeywordsQueryList_2; 
}

export interface wordpressWpMediaMediaDetailsImageMetaApertureQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaMediaDetailsImageMetaCreditQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaMediaDetailsImageMetaCameraQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaMediaDetailsImageMetaCaptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaMediaDetailsImageMetaCreatedTimestampQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaMediaDetailsImageMetaCopyrightQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaMediaDetailsImageMetaFocalLengthQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaMediaDetailsImageMetaIsoQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaMediaDetailsImageMetaShutterSpeedQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaMediaDetailsImageMetaTitleQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaMediaDetailsImageMetaOrientationQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaMediaDetailsImageMetaKeywordsQueryList_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
  in?: string[]; 
}

export interface wordpressWpMediaPostQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpMediaSourceUrlQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaLinksInputObject_2 {
  self?: wordpressWpMediaLinksSelfQueryList_2; 
  collection?: wordpressWpMediaLinksCollectionQueryList_2; 
  about?: wordpressWpMediaLinksAboutQueryList_2; 
  author?: wordpressWpMediaLinksAuthorQueryList_2; 
  replies?: wordpressWpMediaLinksRepliesQueryList_2; 
}

export interface wordpressWpMediaLinksSelfQueryList_2 {
  in?: wordpressWpMediaLinksSelfInputObject_2[]; 
}

export interface wordpressWpMediaLinksSelfInputObject_2 {
  href?: wordpressWpMediaLinksSelfHrefQueryString_2; 
}

export interface wordpressWpMediaLinksSelfHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaLinksCollectionQueryList_2 {
  in?: wordpressWpMediaLinksCollectionInputObject_2[]; 
}

export interface wordpressWpMediaLinksCollectionInputObject_2 {
  href?: wordpressWpMediaLinksCollectionHrefQueryString_2; 
}

export interface wordpressWpMediaLinksCollectionHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaLinksAboutQueryList_2 {
  in?: wordpressWpMediaLinksAboutInputObject_2[]; 
}

export interface wordpressWpMediaLinksAboutInputObject_2 {
  href?: wordpressWpMediaLinksAboutHrefQueryString_2; 
}

export interface wordpressWpMediaLinksAboutHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaLinksAuthorQueryList_2 {
  in?: wordpressWpMediaLinksAuthorInputObject_2[]; 
}

export interface wordpressWpMediaLinksAuthorInputObject_2 {
  embeddable?: wordpressWpMediaLinksAuthorEmbeddableQueryBoolean_2; 
  href?: wordpressWpMediaLinksAuthorHrefQueryString_2; 
}

export interface wordpressWpMediaLinksAuthorEmbeddableQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpMediaLinksAuthorHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaLinksRepliesQueryList_2 {
  in?: wordpressWpMediaLinksRepliesInputObject_2[]; 
}

export interface wordpressWpMediaLinksRepliesInputObject_2 {
  embeddable?: wordpressWpMediaLinksRepliesEmbeddableQueryBoolean_2; 
  href?: wordpressWpMediaLinksRepliesHrefQueryString_2; 
}

export interface wordpressWpMediaLinksRepliesEmbeddableQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpMediaLinksRepliesHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaInternalInputObject_2 {
  type?: wordpressWpMediaInternalTypeQueryString_2; 
  contentDigest?: wordpressWpMediaInternalContentDigestQueryString_2; 
  owner?: wordpressWpMediaInternalOwnerQueryString_2; 
}

export interface wordpressWpMediaInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpMediaInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosWordpressIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosDateQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosGuidQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosModifiedQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosStatusQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosLinkQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosTitleQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosTemplateQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosTagsQueryList_2 {
  eq?: number; 
  ne?: number; 
  in?: number[]; 
}

export interface wordpressWpTrabajosClientesQueryList_2 {
  eq?: number; 
  ne?: number; 
  in?: number[]; 
}

export interface wordpressWpTrabajosAcfInputObject_2 {
  cliente?: wordpressWpTrabajosAcfClienteInputObject_2; 
  campana?: wordpressWpTrabajosAcfCampanaQueryString_2; 
  tipo?: wordpressWpTrabajosAcfTipoQueryList_2; 
  descripcion?: wordpressWpTrabajosAcfDescripcionQueryString_2; 
  imagen?: wordpressWpTrabajosAcfImagenInputObject_2; 
  piezas?: wordpressWpTrabajosAcfPiezasQueryList_2; 
}

export interface wordpressWpTrabajosAcfClienteInputObject_2 {
  term_id?: wordpressWpTrabajosAcfClienteTermIdQueryInteger_2; 
  name?: wordpressWpTrabajosAcfClienteNameQueryString_2; 
  slug?: wordpressWpTrabajosAcfClienteSlugQueryString_2; 
  term_group?: wordpressWpTrabajosAcfClienteTermGroupQueryInteger_2; 
  term_taxonomy_id?: wordpressWpTrabajosAcfClienteTermTaxonomyIdQueryInteger_2; 
  taxonomy?: wordpressWpTrabajosAcfClienteTaxonomyQueryString_2; 
  description?: wordpressWpTrabajosAcfClienteDescriptionQueryString_2; 
  wordpress_parent?: wordpressWpTrabajosAcfClienteWordpressParentQueryInteger_2; 
  count?: wordpressWpTrabajosAcfClienteCountQueryInteger_2; 
  filter?: wordpressWpTrabajosAcfClienteFilterQueryString_2; 
}

export interface wordpressWpTrabajosAcfClienteTermIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfClienteNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfClienteSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfClienteTermGroupQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfClienteTermTaxonomyIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfClienteTaxonomyQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfClienteDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfClienteWordpressParentQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfClienteCountQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfClienteFilterQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfCampanaQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfTipoQueryList_2 {
  in?: wordpressWpTrabajosAcfTipoInputObject_2[]; 
}

export interface wordpressWpTrabajosAcfTipoInputObject_2 {
  term_id?: wordpressWpTrabajosAcfTipoTermIdQueryInteger_2; 
  name?: wordpressWpTrabajosAcfTipoNameQueryString_2; 
  slug?: wordpressWpTrabajosAcfTipoSlugQueryString_2; 
  term_group?: wordpressWpTrabajosAcfTipoTermGroupQueryInteger_2; 
  term_taxonomy_id?: wordpressWpTrabajosAcfTipoTermTaxonomyIdQueryInteger_2; 
  taxonomy?: wordpressWpTrabajosAcfTipoTaxonomyQueryString_2; 
  description?: wordpressWpTrabajosAcfTipoDescriptionQueryString_2; 
  wordpress_parent?: wordpressWpTrabajosAcfTipoWordpressParentQueryInteger_2; 
  count?: wordpressWpTrabajosAcfTipoCountQueryInteger_2; 
  filter?: wordpressWpTrabajosAcfTipoFilterQueryString_2; 
}

export interface wordpressWpTrabajosAcfTipoTermIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfTipoNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfTipoSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfTipoTermGroupQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfTipoTermTaxonomyIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfTipoTaxonomyQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfTipoDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfTipoWordpressParentQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfTipoCountQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfTipoFilterQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfDescripcionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenInputObject_2 {
  wordpress_id?: wordpressWpTrabajosAcfImagenWordpressIdQueryInteger_2; 
  title?: wordpressWpTrabajosAcfImagenTitleQueryString_2; 
  filename?: wordpressWpTrabajosAcfImagenFilenameQueryString_2; 
  url?: wordpressWpTrabajosAcfImagenUrlQueryString_2; 
  alt?: wordpressWpTrabajosAcfImagenAltQueryString_2; 
  author?: wordpressWpTrabajosAcfImagenAuthorQueryString_2; 
  description?: wordpressWpTrabajosAcfImagenDescriptionQueryString_2; 
  caption?: wordpressWpTrabajosAcfImagenCaptionQueryString_2; 
  name?: wordpressWpTrabajosAcfImagenNameQueryString_2; 
  date?: wordpressWpTrabajosAcfImagenDateQueryString_2; 
  modified?: wordpressWpTrabajosAcfImagenModifiedQueryString_2; 
  mime_type?: wordpressWpTrabajosAcfImagenMimeTypeQueryString_2; 
  type?: wordpressWpTrabajosAcfImagenTypeQueryString_2; 
  icon?: wordpressWpTrabajosAcfImagenIconQueryString_2; 
  width?: wordpressWpTrabajosAcfImagenWidthQueryInteger_2; 
  height?: wordpressWpTrabajosAcfImagenHeightQueryInteger_2; 
  sizes?: wordpressWpTrabajosAcfImagenSizesInputObject_2; 
}

export interface wordpressWpTrabajosAcfImagenWordpressIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfImagenTitleQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenFilenameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenUrlQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenAltQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenAuthorQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenCaptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenDateQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenModifiedQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenMimeTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenIconQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfImagenHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfImagenSizesInputObject_2 {
  thumbnail?: wordpressWpTrabajosAcfImagenSizesThumbnailQueryString_2; 
  thumbnail_width?: wordpressWpTrabajosAcfImagenSizesThumbnailWidthQueryInteger_2; 
  thumbnail_height?: wordpressWpTrabajosAcfImagenSizesThumbnailHeightQueryInteger_2; 
  medium?: wordpressWpTrabajosAcfImagenSizesMediumQueryString_2; 
  medium_width?: wordpressWpTrabajosAcfImagenSizesMediumWidthQueryInteger_2; 
  medium_height?: wordpressWpTrabajosAcfImagenSizesMediumHeightQueryInteger_2; 
  medium_large?: wordpressWpTrabajosAcfImagenSizesMediumLargeQueryString_2; 
  medium_large_width?: wordpressWpTrabajosAcfImagenSizesMediumLargeWidthQueryInteger_2; 
  medium_large_height?: wordpressWpTrabajosAcfImagenSizesMediumLargeHeightQueryInteger_2; 
  large?: wordpressWpTrabajosAcfImagenSizesLargeQueryString_2; 
  large_width?: wordpressWpTrabajosAcfImagenSizesLargeWidthQueryInteger_2; 
  large_height?: wordpressWpTrabajosAcfImagenSizesLargeHeightQueryInteger_2; 
}

export interface wordpressWpTrabajosAcfImagenSizesThumbnailQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenSizesThumbnailWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfImagenSizesThumbnailHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfImagenSizesMediumQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenSizesMediumWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfImagenSizesMediumHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfImagenSizesMediumLargeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenSizesMediumLargeWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfImagenSizesMediumLargeHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfImagenSizesLargeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfImagenSizesLargeWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfImagenSizesLargeHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfPiezasQueryList_2 {
  in?: wordpressWpTrabajosAcfPiezasInputObject_2[]; 
}

export interface wordpressWpTrabajosAcfPiezasInputObject_2 {
  url?: wordpressWpTrabajosAcfPiezasUrlQueryString_2; 
  imagen_de_la_pieza?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaInputObject_2; 
  tipo_de_pieza?: wordpressWpTrabajosAcfPiezasTipoDePiezaQueryString_2; 
  campana?: wordpressWpTrabajosAcfPiezasCampanaQueryString_2; 
  descripcion?: wordpressWpTrabajosAcfPiezasDescripcionQueryString_2; 
}

export interface wordpressWpTrabajosAcfPiezasUrlQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaInputObject_2 {
  wordpress_id?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaWordpressIdQueryInteger_2; 
  title?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaTitleQueryString_2; 
  filename?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaFilenameQueryString_2; 
  url?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaUrlQueryString_2; 
  alt?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaAltQueryString_2; 
  author?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaAuthorQueryString_2; 
  description?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaDescriptionQueryString_2; 
  caption?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaCaptionQueryString_2; 
  name?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaNameQueryString_2; 
  date?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaDateQueryString_2; 
  modified?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaModifiedQueryString_2; 
  mime_type?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaMimeTypeQueryString_2; 
  type?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaTypeQueryString_2; 
  icon?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaIconQueryString_2; 
  width?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaWidthQueryInteger_2; 
  height?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaHeightQueryInteger_2; 
  sizes?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesInputObject_2; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaWordpressIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaTitleQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaFilenameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaUrlQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaAltQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaAuthorQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaCaptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaDateQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaModifiedQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaMimeTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaIconQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesInputObject_2 {
  thumbnail?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesThumbnailQueryString_2; 
  thumbnail_width?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesThumbnailWidthQueryInteger_2; 
  thumbnail_height?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesThumbnailHeightQueryInteger_2; 
  medium?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesMediumQueryString_2; 
  medium_width?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesMediumWidthQueryInteger_2; 
  medium_height?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesMediumHeightQueryInteger_2; 
  medium_large?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesMediumLargeQueryString_2; 
  medium_large_width?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesMediumLargeWidthQueryInteger_2; 
  medium_large_height?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesMediumLargeHeightQueryInteger_2; 
  large?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesLargeQueryString_2; 
  large_width?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesLargeWidthQueryInteger_2; 
  large_height?: wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesLargeHeightQueryInteger_2; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesThumbnailQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesThumbnailWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesThumbnailHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesMediumQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesMediumWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesMediumHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesMediumLargeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesMediumLargeWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesMediumLargeHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesLargeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesLargeWidthQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfPiezasImagenDeLaPiezaSizesLargeHeightQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpTrabajosAcfPiezasTipoDePiezaQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasCampanaQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosAcfPiezasDescripcionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosLinksInputObject_2 {
  self?: wordpressWpTrabajosLinksSelfQueryList_2; 
  collection?: wordpressWpTrabajosLinksCollectionQueryList_2; 
  about?: wordpressWpTrabajosLinksAboutQueryList_2; 
  wp_attachment?: wordpressWpTrabajosLinksWpAttachmentQueryList_2; 
  wp_term?: wordpressWpTrabajosLinksWpTermQueryList_2; 
  curies?: wordpressWpTrabajosLinksCuriesQueryList_2; 
}

export interface wordpressWpTrabajosLinksSelfQueryList_2 {
  in?: wordpressWpTrabajosLinksSelfInputObject_2[]; 
}

export interface wordpressWpTrabajosLinksSelfInputObject_2 {
  href?: wordpressWpTrabajosLinksSelfHrefQueryString_2; 
}

export interface wordpressWpTrabajosLinksSelfHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosLinksCollectionQueryList_2 {
  in?: wordpressWpTrabajosLinksCollectionInputObject_2[]; 
}

export interface wordpressWpTrabajosLinksCollectionInputObject_2 {
  href?: wordpressWpTrabajosLinksCollectionHrefQueryString_2; 
}

export interface wordpressWpTrabajosLinksCollectionHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosLinksAboutQueryList_2 {
  in?: wordpressWpTrabajosLinksAboutInputObject_2[]; 
}

export interface wordpressWpTrabajosLinksAboutInputObject_2 {
  href?: wordpressWpTrabajosLinksAboutHrefQueryString_2; 
}

export interface wordpressWpTrabajosLinksAboutHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosLinksWpAttachmentQueryList_2 {
  in?: wordpressWpTrabajosLinksWpAttachmentInputObject_2[]; 
}

export interface wordpressWpTrabajosLinksWpAttachmentInputObject_2 {
  href?: wordpressWpTrabajosLinksWpAttachmentHrefQueryString_2; 
}

export interface wordpressWpTrabajosLinksWpAttachmentHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosLinksWpTermQueryList_2 {
  in?: wordpressWpTrabajosLinksWpTermInputObject_2[]; 
}

export interface wordpressWpTrabajosLinksWpTermInputObject_2 {
  taxonomy?: wordpressWpTrabajosLinksWpTermTaxonomyQueryString_2; 
  embeddable?: wordpressWpTrabajosLinksWpTermEmbeddableQueryBoolean_2; 
  href?: wordpressWpTrabajosLinksWpTermHrefQueryString_2; 
}

export interface wordpressWpTrabajosLinksWpTermTaxonomyQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosLinksWpTermEmbeddableQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpTrabajosLinksWpTermHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosLinksCuriesQueryList_2 {
  in?: wordpressWpTrabajosLinksCuriesInputObject_2[]; 
}

export interface wordpressWpTrabajosLinksCuriesInputObject_2 {
  name?: wordpressWpTrabajosLinksCuriesNameQueryString_2; 
  href?: wordpressWpTrabajosLinksCuriesHrefQueryString_2; 
  templated?: wordpressWpTrabajosLinksCuriesTemplatedQueryBoolean_2; 
}

export interface wordpressWpTrabajosLinksCuriesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosLinksCuriesHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosLinksCuriesTemplatedQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpTrabajosIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosInternalInputObject_2 {
  type?: wordpressWpTrabajosInternalTypeQueryString_2; 
  contentDigest?: wordpressWpTrabajosInternalContentDigestQueryString_2; 
  owner?: wordpressWpTrabajosInternalOwnerQueryString_2; 
}

export interface wordpressWpTrabajosInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTrabajosInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesWordpressIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesHierarchicalQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpTypesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesTaxonomiesQueryList_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
  in?: string[]; 
}

export interface wordpressWpTypesRestBaseQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesLinksInputObject_2 {
  collection?: wordpressWpTypesLinksCollectionQueryList_2; 
  wp_items?: wordpressWpTypesLinksWpItemsQueryList_2; 
  curies?: wordpressWpTypesLinksCuriesQueryList_2; 
}

export interface wordpressWpTypesLinksCollectionQueryList_2 {
  in?: wordpressWpTypesLinksCollectionInputObject_2[]; 
}

export interface wordpressWpTypesLinksCollectionInputObject_2 {
  href?: wordpressWpTypesLinksCollectionHrefQueryString_2; 
}

export interface wordpressWpTypesLinksCollectionHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesLinksWpItemsQueryList_2 {
  in?: wordpressWpTypesLinksWpItemsInputObject_2[]; 
}

export interface wordpressWpTypesLinksWpItemsInputObject_2 {
  href?: wordpressWpTypesLinksWpItemsHrefQueryString_2; 
}

export interface wordpressWpTypesLinksWpItemsHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesLinksCuriesQueryList_2 {
  in?: wordpressWpTypesLinksCuriesInputObject_2[]; 
}

export interface wordpressWpTypesLinksCuriesInputObject_2 {
  name?: wordpressWpTypesLinksCuriesNameQueryString_2; 
  href?: wordpressWpTypesLinksCuriesHrefQueryString_2; 
  templated?: wordpressWpTypesLinksCuriesTemplatedQueryBoolean_2; 
}

export interface wordpressWpTypesLinksCuriesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesLinksCuriesHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesLinksCuriesTemplatedQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpTypesIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesInternalInputObject_2 {
  type?: wordpressWpTypesInternalTypeQueryString_2; 
  contentDigest?: wordpressWpTypesInternalContentDigestQueryString_2; 
  owner?: wordpressWpTypesInternalOwnerQueryString_2; 
}

export interface wordpressWpTypesInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTypesInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpStatusesWordpressIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpStatusesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpStatusesPublicQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpStatusesQueryableQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpStatusesSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpStatusesLinksInputObject_2 {
  archives?: wordpressWpStatusesLinksArchivesQueryList_2; 
}

export interface wordpressWpStatusesLinksArchivesQueryList_2 {
  in?: wordpressWpStatusesLinksArchivesInputObject_2[]; 
}

export interface wordpressWpStatusesLinksArchivesInputObject_2 {
  href?: wordpressWpStatusesLinksArchivesHrefQueryString_2; 
}

export interface wordpressWpStatusesLinksArchivesHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpStatusesIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpStatusesInternalInputObject_2 {
  type?: wordpressWpStatusesInternalTypeQueryString_2; 
  contentDigest?: wordpressWpStatusesInternalContentDigestQueryString_2; 
  owner?: wordpressWpStatusesInternalOwnerQueryString_2; 
}

export interface wordpressWpStatusesInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpStatusesInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpStatusesInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesWordpressIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesTypesQueryList_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
  in?: string[]; 
}

export interface wordpressWpTaxonomiesHierarchicalQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpTaxonomiesRestBaseQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesLinksInputObject_2 {
  collection?: wordpressWpTaxonomiesLinksCollectionQueryList_2; 
  wp_items?: wordpressWpTaxonomiesLinksWpItemsQueryList_2; 
  curies?: wordpressWpTaxonomiesLinksCuriesQueryList_2; 
}

export interface wordpressWpTaxonomiesLinksCollectionQueryList_2 {
  in?: wordpressWpTaxonomiesLinksCollectionInputObject_2[]; 
}

export interface wordpressWpTaxonomiesLinksCollectionInputObject_2 {
  href?: wordpressWpTaxonomiesLinksCollectionHrefQueryString_2; 
}

export interface wordpressWpTaxonomiesLinksCollectionHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesLinksWpItemsQueryList_2 {
  in?: wordpressWpTaxonomiesLinksWpItemsInputObject_2[]; 
}

export interface wordpressWpTaxonomiesLinksWpItemsInputObject_2 {
  href?: wordpressWpTaxonomiesLinksWpItemsHrefQueryString_2; 
}

export interface wordpressWpTaxonomiesLinksWpItemsHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesLinksCuriesQueryList_2 {
  in?: wordpressWpTaxonomiesLinksCuriesInputObject_2[]; 
}

export interface wordpressWpTaxonomiesLinksCuriesInputObject_2 {
  name?: wordpressWpTaxonomiesLinksCuriesNameQueryString_2; 
  href?: wordpressWpTaxonomiesLinksCuriesHrefQueryString_2; 
  templated?: wordpressWpTaxonomiesLinksCuriesTemplatedQueryBoolean_2; 
}

export interface wordpressWpTaxonomiesLinksCuriesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesLinksCuriesHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesLinksCuriesTemplatedQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpTaxonomiesIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesInternalInputObject_2 {
  type?: wordpressWpTaxonomiesInternalTypeQueryString_2; 
  contentDigest?: wordpressWpTaxonomiesInternalContentDigestQueryString_2; 
  owner?: wordpressWpTaxonomiesInternalOwnerQueryString_2; 
}

export interface wordpressWpTaxonomiesInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpTaxonomiesInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryWordpressIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressCategoryCountQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressCategoryDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryLinkQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategorySlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryWordpressParentQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressCategoryLinksInputObject_2 {
  self?: wordpressCategoryLinksSelfQueryList_2; 
  collection?: wordpressCategoryLinksCollectionQueryList_2; 
  about?: wordpressCategoryLinksAboutQueryList_2; 
  wp_post_type?: wordpressCategoryLinksWpPostTypeQueryList_2; 
  curies?: wordpressCategoryLinksCuriesQueryList_2; 
}

export interface wordpressCategoryLinksSelfQueryList_2 {
  in?: wordpressCategoryLinksSelfInputObject_2[]; 
}

export interface wordpressCategoryLinksSelfInputObject_2 {
  href?: wordpressCategoryLinksSelfHrefQueryString_2; 
}

export interface wordpressCategoryLinksSelfHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryLinksCollectionQueryList_2 {
  in?: wordpressCategoryLinksCollectionInputObject_2[]; 
}

export interface wordpressCategoryLinksCollectionInputObject_2 {
  href?: wordpressCategoryLinksCollectionHrefQueryString_2; 
}

export interface wordpressCategoryLinksCollectionHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryLinksAboutQueryList_2 {
  in?: wordpressCategoryLinksAboutInputObject_2[]; 
}

export interface wordpressCategoryLinksAboutInputObject_2 {
  href?: wordpressCategoryLinksAboutHrefQueryString_2; 
}

export interface wordpressCategoryLinksAboutHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryLinksWpPostTypeQueryList_2 {
  in?: wordpressCategoryLinksWpPostTypeInputObject_2[]; 
}

export interface wordpressCategoryLinksWpPostTypeInputObject_2 {
  href?: wordpressCategoryLinksWpPostTypeHrefQueryString_2; 
}

export interface wordpressCategoryLinksWpPostTypeHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryLinksCuriesQueryList_2 {
  in?: wordpressCategoryLinksCuriesInputObject_2[]; 
}

export interface wordpressCategoryLinksCuriesInputObject_2 {
  name?: wordpressCategoryLinksCuriesNameQueryString_2; 
  href?: wordpressCategoryLinksCuriesHrefQueryString_2; 
  templated?: wordpressCategoryLinksCuriesTemplatedQueryBoolean_2; 
}

export interface wordpressCategoryLinksCuriesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryLinksCuriesHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryLinksCuriesTemplatedQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressCategoryIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryInternalInputObject_2 {
  type?: wordpressCategoryInternalTypeQueryString_2; 
  contentDigest?: wordpressCategoryInternalContentDigestQueryString_2; 
  owner?: wordpressCategoryInternalOwnerQueryString_2; 
}

export interface wordpressCategoryInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressCategoryInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagWordpressIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressTagCountQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressTagDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagLinkQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagLinksInputObject_2 {
  self?: wordpressTagLinksSelfQueryList_2; 
  collection?: wordpressTagLinksCollectionQueryList_2; 
  about?: wordpressTagLinksAboutQueryList_2; 
  wp_post_type?: wordpressTagLinksWpPostTypeQueryList_2; 
  curies?: wordpressTagLinksCuriesQueryList_2; 
}

export interface wordpressTagLinksSelfQueryList_2 {
  in?: wordpressTagLinksSelfInputObject_2[]; 
}

export interface wordpressTagLinksSelfInputObject_2 {
  href?: wordpressTagLinksSelfHrefQueryString_2; 
}

export interface wordpressTagLinksSelfHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagLinksCollectionQueryList_2 {
  in?: wordpressTagLinksCollectionInputObject_2[]; 
}

export interface wordpressTagLinksCollectionInputObject_2 {
  href?: wordpressTagLinksCollectionHrefQueryString_2; 
}

export interface wordpressTagLinksCollectionHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagLinksAboutQueryList_2 {
  in?: wordpressTagLinksAboutInputObject_2[]; 
}

export interface wordpressTagLinksAboutInputObject_2 {
  href?: wordpressTagLinksAboutHrefQueryString_2; 
}

export interface wordpressTagLinksAboutHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagLinksWpPostTypeQueryList_2 {
  in?: wordpressTagLinksWpPostTypeInputObject_2[]; 
}

export interface wordpressTagLinksWpPostTypeInputObject_2 {
  href?: wordpressTagLinksWpPostTypeHrefQueryString_2; 
}

export interface wordpressTagLinksWpPostTypeHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagLinksCuriesQueryList_2 {
  in?: wordpressTagLinksCuriesInputObject_2[]; 
}

export interface wordpressTagLinksCuriesInputObject_2 {
  name?: wordpressTagLinksCuriesNameQueryString_2; 
  href?: wordpressTagLinksCuriesHrefQueryString_2; 
  templated?: wordpressTagLinksCuriesTemplatedQueryBoolean_2; 
}

export interface wordpressTagLinksCuriesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagLinksCuriesHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagLinksCuriesTemplatedQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressTagIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagInternalInputObject_2 {
  type?: wordpressTagInternalTypeQueryString_2; 
  contentDigest?: wordpressTagInternalContentDigestQueryString_2; 
  owner?: wordpressTagInternalOwnerQueryString_2; 
}

export interface wordpressTagInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressTagInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesWordpressIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpClientesCountQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpClientesDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesLinkQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesLinksInputObject_2 {
  self?: wordpressWpClientesLinksSelfQueryList_2; 
  collection?: wordpressWpClientesLinksCollectionQueryList_2; 
  about?: wordpressWpClientesLinksAboutQueryList_2; 
  wp_post_type?: wordpressWpClientesLinksWpPostTypeQueryList_2; 
  curies?: wordpressWpClientesLinksCuriesQueryList_2; 
}

export interface wordpressWpClientesLinksSelfQueryList_2 {
  in?: wordpressWpClientesLinksSelfInputObject_2[]; 
}

export interface wordpressWpClientesLinksSelfInputObject_2 {
  href?: wordpressWpClientesLinksSelfHrefQueryString_2; 
}

export interface wordpressWpClientesLinksSelfHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesLinksCollectionQueryList_2 {
  in?: wordpressWpClientesLinksCollectionInputObject_2[]; 
}

export interface wordpressWpClientesLinksCollectionInputObject_2 {
  href?: wordpressWpClientesLinksCollectionHrefQueryString_2; 
}

export interface wordpressWpClientesLinksCollectionHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesLinksAboutQueryList_2 {
  in?: wordpressWpClientesLinksAboutInputObject_2[]; 
}

export interface wordpressWpClientesLinksAboutInputObject_2 {
  href?: wordpressWpClientesLinksAboutHrefQueryString_2; 
}

export interface wordpressWpClientesLinksAboutHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesLinksWpPostTypeQueryList_2 {
  in?: wordpressWpClientesLinksWpPostTypeInputObject_2[]; 
}

export interface wordpressWpClientesLinksWpPostTypeInputObject_2 {
  href?: wordpressWpClientesLinksWpPostTypeHrefQueryString_2; 
}

export interface wordpressWpClientesLinksWpPostTypeHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesLinksCuriesQueryList_2 {
  in?: wordpressWpClientesLinksCuriesInputObject_2[]; 
}

export interface wordpressWpClientesLinksCuriesInputObject_2 {
  name?: wordpressWpClientesLinksCuriesNameQueryString_2; 
  href?: wordpressWpClientesLinksCuriesHrefQueryString_2; 
  templated?: wordpressWpClientesLinksCuriesTemplatedQueryBoolean_2; 
}

export interface wordpressWpClientesLinksCuriesNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesLinksCuriesHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesLinksCuriesTemplatedQueryBoolean_2 {
  eq?: boolean; 
  ne?: boolean; 
}

export interface wordpressWpClientesIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesInternalInputObject_2 {
  type?: wordpressWpClientesInternalTypeQueryString_2; 
  contentDigest?: wordpressWpClientesInternalContentDigestQueryString_2; 
  owner?: wordpressWpClientesInternalOwnerQueryString_2; 
}

export interface wordpressWpClientesInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpClientesInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersWordpressIdQueryInteger_2 {
  eq?: number; 
  ne?: number; 
}

export interface wordpressWpUsersNameQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersUrlQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersDescriptionQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersLinkQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersSlugQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersLinksInputObject_2 {
  self?: wordpressWpUsersLinksSelfQueryList_2; 
  collection?: wordpressWpUsersLinksCollectionQueryList_2; 
}

export interface wordpressWpUsersLinksSelfQueryList_2 {
  in?: wordpressWpUsersLinksSelfInputObject_2[]; 
}

export interface wordpressWpUsersLinksSelfInputObject_2 {
  href?: wordpressWpUsersLinksSelfHrefQueryString_2; 
}

export interface wordpressWpUsersLinksSelfHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersLinksCollectionQueryList_2 {
  in?: wordpressWpUsersLinksCollectionInputObject_2[]; 
}

export interface wordpressWpUsersLinksCollectionInputObject_2 {
  href?: wordpressWpUsersLinksCollectionHrefQueryString_2; 
}

export interface wordpressWpUsersLinksCollectionHrefQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersIdQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersInternalInputObject_2 {
  type?: wordpressWpUsersInternalTypeQueryString_2; 
  contentDigest?: wordpressWpUsersInternalContentDigestQueryString_2; 
  owner?: wordpressWpUsersInternalOwnerQueryString_2; 
}

export interface wordpressWpUsersInternalTypeQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersInternalContentDigestQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}

export interface wordpressWpUsersInternalOwnerQueryString_2 {
  eq?: string; 
  ne?: string; 
  regex?: string; 
  glob?: string; 
}
export interface AllSitePageRootQueryTypeArgs {
  skip?: number; 
  limit?: number; 
  sort?: sitePageConnectionSort; 
  filter?: filterSitePage; 
}
export interface AllSitePluginRootQueryTypeArgs {
  skip?: number; 
  limit?: number; 
  sort?: sitePluginConnectionSort; 
  filter?: filterSitePlugin; 
}
export interface AllFileRootQueryTypeArgs {
  skip?: number; 
  limit?: number; 
  sort?: fileConnectionSort; 
  filter?: filterFile; 
}
export interface AllImageSharpRootQueryTypeArgs {
  skip?: number; 
  limit?: number; 
  sort?: imageSharpConnectionSort; 
  filter?: filterImageSharp; 
}
export interface AllWordpressWpMediaRootQueryTypeArgs {
  skip?: number; 
  limit?: number; 
  sort?: wordpressWpMediaConnectionSort; 
  filter?: filterWordpressWpMedia; 
}
export interface AllWordpressWpTrabajosRootQueryTypeArgs {
  skip?: number; 
  limit?: number; 
  sort?: wordpressWpTrabajosConnectionSort; 
  filter?: filterWordpressWpTrabajos; 
}
export interface AllWordpressWpTypesRootQueryTypeArgs {
  skip?: number; 
  limit?: number; 
  sort?: wordpressWpTypesConnectionSort; 
  filter?: filterWordpressWpTypes; 
}
export interface AllWordpressWpStatusesRootQueryTypeArgs {
  skip?: number; 
  limit?: number; 
  sort?: wordpressWpStatusesConnectionSort; 
  filter?: filterWordpressWpStatuses; 
}
export interface AllWordpressWpTaxonomiesRootQueryTypeArgs {
  skip?: number; 
  limit?: number; 
  sort?: wordpressWpTaxonomiesConnectionSort; 
  filter?: filterWordpressWpTaxonomies; 
}
export interface AllWordpressCategoryRootQueryTypeArgs {
  skip?: number; 
  limit?: number; 
  sort?: wordpressCategoryConnectionSort; 
  filter?: filterWordpressCategory; 
}
export interface AllWordpressTagRootQueryTypeArgs {
  skip?: number; 
  limit?: number; 
  sort?: wordpressTagConnectionSort; 
  filter?: filterWordpressTag; 
}
export interface AllWordpressWpClientesRootQueryTypeArgs {
  skip?: number; 
  limit?: number; 
  sort?: wordpressWpClientesConnectionSort; 
  filter?: filterWordpressWpClientes; 
}
export interface AllWordpressWpUsersRootQueryTypeArgs {
  skip?: number; 
  limit?: number; 
  sort?: wordpressWpUsersConnectionSort; 
  filter?: filterWordpressWpUsers; 
}
export interface SitePageRootQueryTypeArgs {
  component?: sitePageComponentQueryString; 
  path?: sitePagePathQueryString_2; 
  componentChunkName?: sitePageComponentChunkNameQueryString; 
  layout?: sitePageLayoutQueryString; 
  jsonName?: sitePageJsonNameQueryString; 
  internalComponentName?: sitePageInternalComponentNameQueryString; 
  updatedAt?: sitePageUpdatedAtQueryInteger; 
  context?: sitePageContextInputObject; 
  pluginCreatorId?: sitePagePluginCreatorIdQueryString; 
  componentPath?: sitePageComponentPathQueryString; 
  id?: sitePageIdQueryString_2; 
  internal?: sitePageInternalInputObject_2; 
}
export interface SitePluginRootQueryTypeArgs {
  resolve?: sitePluginResolveQueryString_2; 
  id?: sitePluginIdQueryString_2; 
  name?: sitePluginNameQueryString_2; 
  version?: sitePluginVersionQueryString_2; 
  pluginOptions?: sitePluginPluginOptionsInputObject_2; 
  nodeAPIs?: sitePluginNodeApIsQueryList_2; 
  pluginFilepath?: sitePluginPluginFilepathQueryString_2; 
  packageJson?: sitePluginPackageJsonInputObject_2; 
  internal?: sitePluginInternalInputObject_2; 
}
export interface SiteRootQueryTypeArgs {
  siteMetadata?: siteSiteMetadataInputObject_2; 
  port?: sitePortQueryString_2; 
  host?: siteHostQueryString_2; 
  pathPrefix?: sitePathPrefixQueryString_2; 
  polyfill?: sitePolyfillQueryBoolean_2; 
  buildTime?: siteBuildTimeQueryString_2; 
  id?: siteIdQueryString_2; 
  internal?: siteInternalInputObject_2; 
}
export interface FileRootQueryTypeArgs {
  id?: fileIdQueryString_2; 
  internal?: fileInternalInputObject_2; 
  sourceInstanceName?: fileSourceInstanceNameQueryString_2; 
  absolutePath?: fileAbsolutePathQueryString_2; 
  relativePath?: fileRelativePathQueryString_2; 
  extension?: fileExtensionQueryString_2; 
  size?: fileSizeQueryInteger_2; 
  prettySize?: filePrettySizeQueryString_2; 
  modifiedTime?: fileModifiedTimeQueryString_2; 
  accessTime?: fileAccessTimeQueryString_2; 
  changeTime?: fileChangeTimeQueryString_2; 
  birthTime?: fileBirthTimeQueryString_2; 
  root?: fileRootQueryString_2; 
  dir?: fileDirQueryString_2; 
  base?: fileBaseQueryString_2; 
  ext?: fileExtQueryString_2; 
  name?: fileNameQueryString_2; 
  relativeDirectory?: fileRelativeDirectoryQueryString_2; 
  dev?: fileDevQueryInteger_2; 
  mode?: fileModeQueryInteger_2; 
  nlink?: fileNlinkQueryInteger_2; 
  uid?: fileUidQueryInteger_2; 
  gid?: fileGidQueryInteger_2; 
  rdev?: fileRdevQueryInteger_2; 
  ino?: fileInoQueryInteger_2; 
  atimeMs?: fileAtimeMsQueryFloat_2; 
  mtimeMs?: fileMtimeMsQueryFloat_2; 
  ctimeMs?: fileCtimeMsQueryFloat_2; 
  birthtimeMs?: fileBirthtimeMsQueryFloat_2; 
  atime?: fileAtimeQueryString_2; 
  mtime?: fileMtimeQueryString_2; 
  ctime?: fileCtimeQueryString_2; 
  birthtime?: fileBirthtimeQueryString_2; 
}
export interface ImageSharpRootQueryTypeArgs {
  id?: imageSharpIdQueryString_2; 
  internal?: imageSharpInternalInputObject_2; 
  original?: originalTypeName_3; 
  resolutions?: resolutionsTypeName_3; 
  sizes?: sizesTypeName_3; 
  responsiveResolution?: responsiveResolutionTypeName_3; 
  responsiveSizes?: responsiveSizesTypeName_3; 
  resize?: resizeTypeName_3; 
}
export interface WordpressWpMediaRootQueryTypeArgs {
  wordpress_id?: wordpressWpMediaWordpressIdQueryInteger_2; 
  date?: wordpressWpMediaDateQueryString_2; 
  guid?: wordpressWpMediaGuidQueryString_2; 
  modified?: wordpressWpMediaModifiedQueryString_2; 
  slug?: wordpressWpMediaSlugQueryString_2; 
  status?: wordpressWpMediaStatusQueryString_2; 
  type?: wordpressWpMediaTypeQueryString_2; 
  link?: wordpressWpMediaLinkQueryString_2; 
  title?: wordpressWpMediaTitleQueryString_2; 
  comment_status?: wordpressWpMediaCommentStatusQueryString_2; 
  ping_status?: wordpressWpMediaPingStatusQueryString_2; 
  template?: wordpressWpMediaTemplateQueryString_2; 
  description?: wordpressWpMediaDescriptionQueryString_2; 
  caption?: wordpressWpMediaCaptionQueryString_2; 
  alt_text?: wordpressWpMediaAltTextQueryString_2; 
  media_type?: wordpressWpMediaMediaTypeQueryString_2; 
  mime_type?: wordpressWpMediaMimeTypeQueryString_2; 
  media_details?: wordpressWpMediaMediaDetailsInputObject_2; 
  post?: wordpressWpMediaPostQueryInteger_2; 
  source_url?: wordpressWpMediaSourceUrlQueryString_2; 
  _links?: wordpressWpMediaLinksInputObject_2; 
  id?: wordpressWpMediaIdQueryString_2; 
  internal?: wordpressWpMediaInternalInputObject_2; 
}
export interface WordpressWpTrabajosRootQueryTypeArgs {
  wordpress_id?: wordpressWpTrabajosWordpressIdQueryInteger_2; 
  date?: wordpressWpTrabajosDateQueryString_2; 
  guid?: wordpressWpTrabajosGuidQueryString_2; 
  modified?: wordpressWpTrabajosModifiedQueryString_2; 
  slug?: wordpressWpTrabajosSlugQueryString_2; 
  status?: wordpressWpTrabajosStatusQueryString_2; 
  type?: wordpressWpTrabajosTypeQueryString_2; 
  link?: wordpressWpTrabajosLinkQueryString_2; 
  title?: wordpressWpTrabajosTitleQueryString_2; 
  template?: wordpressWpTrabajosTemplateQueryString_2; 
  tags?: wordpressWpTrabajosTagsQueryList_2; 
  clientes?: wordpressWpTrabajosClientesQueryList_2; 
  acf?: wordpressWpTrabajosAcfInputObject_2; 
  _links?: wordpressWpTrabajosLinksInputObject_2; 
  id?: wordpressWpTrabajosIdQueryString_2; 
  internal?: wordpressWpTrabajosInternalInputObject_2; 
}
export interface WordpressWpTypesRootQueryTypeArgs {
  wordpress_id?: wordpressWpTypesWordpressIdQueryString_2; 
  description?: wordpressWpTypesDescriptionQueryString_2; 
  hierarchical?: wordpressWpTypesHierarchicalQueryBoolean_2; 
  name?: wordpressWpTypesNameQueryString_2; 
  slug?: wordpressWpTypesSlugQueryString_2; 
  taxonomies?: wordpressWpTypesTaxonomiesQueryList_2; 
  rest_base?: wordpressWpTypesRestBaseQueryString_2; 
  _links?: wordpressWpTypesLinksInputObject_2; 
  id?: wordpressWpTypesIdQueryString_2; 
  internal?: wordpressWpTypesInternalInputObject_2; 
}
export interface WordpressWpStatusesRootQueryTypeArgs {
  wordpress_id?: wordpressWpStatusesWordpressIdQueryString_2; 
  name?: wordpressWpStatusesNameQueryString_2; 
  public?: wordpressWpStatusesPublicQueryBoolean_2; 
  queryable?: wordpressWpStatusesQueryableQueryBoolean_2; 
  slug?: wordpressWpStatusesSlugQueryString_2; 
  _links?: wordpressWpStatusesLinksInputObject_2; 
  id?: wordpressWpStatusesIdQueryString_2; 
  internal?: wordpressWpStatusesInternalInputObject_2; 
}
export interface WordpressWpTaxonomiesRootQueryTypeArgs {
  wordpress_id?: wordpressWpTaxonomiesWordpressIdQueryString_2; 
  name?: wordpressWpTaxonomiesNameQueryString_2; 
  slug?: wordpressWpTaxonomiesSlugQueryString_2; 
  description?: wordpressWpTaxonomiesDescriptionQueryString_2; 
  types?: wordpressWpTaxonomiesTypesQueryList_2; 
  hierarchical?: wordpressWpTaxonomiesHierarchicalQueryBoolean_2; 
  rest_base?: wordpressWpTaxonomiesRestBaseQueryString_2; 
  _links?: wordpressWpTaxonomiesLinksInputObject_2; 
  id?: wordpressWpTaxonomiesIdQueryString_2; 
  internal?: wordpressWpTaxonomiesInternalInputObject_2; 
}
export interface WordpressCategoryRootQueryTypeArgs {
  wordpress_id?: wordpressCategoryWordpressIdQueryInteger_2; 
  count?: wordpressCategoryCountQueryInteger_2; 
  description?: wordpressCategoryDescriptionQueryString_2; 
  link?: wordpressCategoryLinkQueryString_2; 
  name?: wordpressCategoryNameQueryString_2; 
  slug?: wordpressCategorySlugQueryString_2; 
  wordpress_parent?: wordpressCategoryWordpressParentQueryInteger_2; 
  _links?: wordpressCategoryLinksInputObject_2; 
  id?: wordpressCategoryIdQueryString_2; 
  internal?: wordpressCategoryInternalInputObject_2; 
}
export interface WordpressTagRootQueryTypeArgs {
  wordpress_id?: wordpressTagWordpressIdQueryInteger_2; 
  count?: wordpressTagCountQueryInteger_2; 
  description?: wordpressTagDescriptionQueryString_2; 
  link?: wordpressTagLinkQueryString_2; 
  name?: wordpressTagNameQueryString_2; 
  slug?: wordpressTagSlugQueryString_2; 
  _links?: wordpressTagLinksInputObject_2; 
  id?: wordpressTagIdQueryString_2; 
  internal?: wordpressTagInternalInputObject_2; 
}
export interface WordpressWpClientesRootQueryTypeArgs {
  wordpress_id?: wordpressWpClientesWordpressIdQueryInteger_2; 
  count?: wordpressWpClientesCountQueryInteger_2; 
  description?: wordpressWpClientesDescriptionQueryString_2; 
  link?: wordpressWpClientesLinkQueryString_2; 
  name?: wordpressWpClientesNameQueryString_2; 
  slug?: wordpressWpClientesSlugQueryString_2; 
  _links?: wordpressWpClientesLinksInputObject_2; 
  id?: wordpressWpClientesIdQueryString_2; 
  internal?: wordpressWpClientesInternalInputObject_2; 
}
export interface WordpressWpUsersRootQueryTypeArgs {
  wordpress_id?: wordpressWpUsersWordpressIdQueryInteger_2; 
  name?: wordpressWpUsersNameQueryString_2; 
  url?: wordpressWpUsersUrlQueryString_2; 
  description?: wordpressWpUsersDescriptionQueryString_2; 
  link?: wordpressWpUsersLinkQueryString_2; 
  slug?: wordpressWpUsersSlugQueryString_2; 
  _links?: wordpressWpUsersLinksInputObject_2; 
  id?: wordpressWpUsersIdQueryString_2; 
  internal?: wordpressWpUsersInternalInputObject_2; 
}
export interface DistinctSitePageConnectionArgs {
  field?: sitePageDistinctEnum; 
}
export interface GroupSitePageConnectionArgs {
  skip?: number; 
  limit?: number; 
  field?: sitePageGroupEnum; 
}
export interface DistinctSitePluginConnectionArgs {
  field?: sitePluginDistinctEnum; 
}
export interface GroupSitePluginConnectionArgs {
  skip?: number; 
  limit?: number; 
  field?: sitePluginGroupEnum; 
}
export interface DistinctFileConnectionArgs {
  field?: fileDistinctEnum; 
}
export interface GroupFileConnectionArgs {
  skip?: number; 
  limit?: number; 
  field?: fileGroupEnum; 
}
export interface SizeFileArgs {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface ModifiedTimeFileArgs {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface AccessTimeFileArgs {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface ChangeTimeFileArgs {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface BirthTimeFileArgs {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface AtimeFileArgs {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface MtimeFileArgs {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface CtimeFileArgs {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface BirthtimeFileArgs {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface ResolutionsImageSharpArgs {
  width?: number; 
  height?: number; 
  jpegProgressive?: boolean; 
  grayscale?: boolean; 
  duotone?: DuotoneGradient; 
  traceSVG?: Potrace; 
  quality?: number; 
  toFormat?: ImageFormat; 
  cropFocus?: ImageCropFocus; 
  rotate?: number; 
}
export interface SizesImageSharpArgs {
  maxWidth?: number; 
  maxHeight?: number; 
  grayscale?: boolean; 
  jpegProgressive?: boolean; 
  duotone?: DuotoneGradient; 
  traceSVG?: Potrace; 
  quality?: number; 
  toFormat?: ImageFormat; 
  cropFocus?: ImageCropFocus; 
  rotate?: number; 
}
export interface ResponsiveResolutionImageSharpArgs {
  width?: number; 
  height?: number; 
  jpegProgressive?: boolean; 
  grayscale?: boolean; 
  duotone?: DuotoneGradient; 
  quality?: number; 
  toFormat?: ImageFormat; 
  cropFocus?: ImageCropFocus; 
  rotate?: number; 
}
export interface ResponsiveSizesImageSharpArgs {
  maxWidth?: number; 
  maxHeight?: number; 
  grayscale?: boolean; 
  jpegProgressive?: boolean; 
  duotone?: DuotoneGradient; 
  quality?: number; 
  toFormat?: ImageFormat; 
  cropFocus?: ImageCropFocus; 
  rotate?: number; 
}
export interface ResizeImageSharpArgs {
  width?: number; 
  height?: number; 
  quality?: number; 
  jpegProgressive?: boolean; 
  pngCompressionLevel?: number; 
  grayscale?: boolean; 
  duotone?: DuotoneGradient; 
  base64?: boolean; 
  traceSVG?: Potrace; 
  toFormat?: ImageFormat; 
  cropFocus?: ImageCropFocus; 
  rotate?: number; 
}
export interface DistinctImageSharpConnectionArgs {
  field?: imageSharpDistinctEnum; 
}
export interface GroupImageSharpConnectionArgs {
  skip?: number; 
  limit?: number; 
  field?: imageSharpGroupEnum; 
}
export interface DistinctWordpressWpMediaConnectionArgs {
  field?: wordpressWpMediaDistinctEnum; 
}
export interface GroupWordpressWpMediaConnectionArgs {
  skip?: number; 
  limit?: number; 
  field?: wordpressWpMediaGroupEnum; 
}
export interface DateWordpressWpMediaArgs {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface ModifiedWordpressWpMediaArgs {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface WidthMediaDetails_2Args {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface HeightMediaDetails_2Args {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface DistinctWordpressWpTrabajosConnectionArgs {
  field?: wordpressWpTrabajosDistinctEnum; 
}
export interface GroupWordpressWpTrabajosConnectionArgs {
  skip?: number; 
  limit?: number; 
  field?: wordpressWpTrabajosGroupEnum; 
}
export interface DateWordpressWpTrabajosArgs {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface ModifiedWordpressWpTrabajosArgs {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface WidthImagenDeLaPieza_2Args {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface HeightImagenDeLaPieza_2Args {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface MediumLargeHeightSizes_4Args {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface LargeHeightSizes_4Args {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface DistinctWordpressWpTypesConnectionArgs {
  field?: wordpressWpTypesDistinctEnum; 
}
export interface GroupWordpressWpTypesConnectionArgs {
  skip?: number; 
  limit?: number; 
  field?: wordpressWpTypesGroupEnum; 
}
export interface DistinctWordpressWpStatusesConnectionArgs {
  field?: wordpressWpStatusesDistinctEnum; 
}
export interface GroupWordpressWpStatusesConnectionArgs {
  skip?: number; 
  limit?: number; 
  field?: wordpressWpStatusesGroupEnum; 
}
export interface DistinctWordpressWpTaxonomiesConnectionArgs {
  field?: wordpressWpTaxonomiesDistinctEnum; 
}
export interface GroupWordpressWpTaxonomiesConnectionArgs {
  skip?: number; 
  limit?: number; 
  field?: wordpressWpTaxonomiesGroupEnum; 
}
export interface DistinctWordpressCategoryConnectionArgs {
  field?: wordpressCategoryDistinctEnum; 
}
export interface GroupWordpressCategoryConnectionArgs {
  skip?: number; 
  limit?: number; 
  field?: wordpressCategoryGroupEnum; 
}
export interface DistinctWordpressTagConnectionArgs {
  field?: wordpressTagDistinctEnum; 
}
export interface GroupWordpressTagConnectionArgs {
  skip?: number; 
  limit?: number; 
  field?: wordpressTagGroupEnum; 
}
export interface DistinctWordpressWpClientesConnectionArgs {
  field?: wordpressWpClientesDistinctEnum; 
}
export interface GroupWordpressWpClientesConnectionArgs {
  skip?: number; 
  limit?: number; 
  field?: wordpressWpClientesGroupEnum; 
}
export interface DistinctWordpressWpUsersConnectionArgs {
  field?: wordpressWpUsersDistinctEnum; 
}
export interface GroupWordpressWpUsersConnectionArgs {
  skip?: number; 
  limit?: number; 
  field?: wordpressWpUsersGroupEnum; 
}
export interface PortSiteArgs {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}
export interface BuildTimeSiteArgs {
  formatString?: string; 
  fromNow?: boolean; /* Returns a string generated with Moment.js&#x27; fromNow function */
  difference?: string; /* Returns the difference between this date and the current time. Defaults to miliseconds but you can also pass in as the measurement years, months, weeks, days, hours, minutes, and seconds. */
}

export type SitePageConnectionSortByFieldsEnum = "component" | "path" | "componentChunkName" | "layout" | "jsonName" | "internalComponentName" | "updatedAt" | "context___id" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "children" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type sitePageConnectionSortOrderValues = "ASC" | "DESC";


export type sitePageDistinctEnum = "component" | "path" | "componentChunkName" | "layout" | "jsonName" | "internalComponentName" | "updatedAt" | "context___id" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type sitePageGroupEnum = "component" | "path" | "componentChunkName" | "layout" | "jsonName" | "internalComponentName" | "updatedAt" | "context___id" | "pluginCreator___NODE" | "pluginCreatorId" | "componentPath" | "id" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type SitePluginConnectionSortByFieldsEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___plugins" | "pluginOptions___baseUrl" | "pluginOptions___protocol" | "pluginOptions___hostingWPCOM" | "pluginOptions___useACF" | "pluginOptions___verboseOutput" | "nodeAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "packageJson___peerDependencies" | "packageJson___optionalDependecies" | "packageJson___bundledDependecies" | "parent" | "children" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type sitePluginConnectionSortOrderValues = "ASC" | "DESC";


export type sitePluginDistinctEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___baseUrl" | "pluginOptions___protocol" | "pluginOptions___hostingWPCOM" | "pluginOptions___useACF" | "pluginOptions___verboseOutput" | "nodeAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type sitePluginGroupEnum = "resolve" | "id" | "name" | "version" | "pluginOptions___baseUrl" | "pluginOptions___protocol" | "pluginOptions___hostingWPCOM" | "pluginOptions___useACF" | "pluginOptions___verboseOutput" | "nodeAPIs" | "pluginFilepath" | "packageJson___name" | "packageJson___description" | "packageJson___version" | "packageJson___main" | "packageJson___keywords" | "packageJson___author" | "packageJson___license" | "packageJson___dependencies" | "packageJson___devDependencies" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type FileConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";


export type fileConnectionSortOrderValues = "ASC" | "DESC";


export type PotraceTurnPolicy = "TURNPOLICY_BLACK" | "TURNPOLICY_WHITE" | "TURNPOLICY_LEFT" | "TURNPOLICY_RIGHT" | "TURNPOLICY_MINORITY" | "TURNPOLICY_MAJORITY";


export type ImageFormat = "NO_CHANGE" | "JPG" | "PNG" | "WEBP";


export type ImageCropFocus = "CENTER" | "NORTH" | "NORTHEAST" | "EAST" | "SOUTHEAST" | "SOUTH" | "SOUTHWEST" | "WEST" | "NORTHWEST" | "ENTROPY" | "ATTENTION";


export type fileDistinctEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";


export type fileGroupEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___mediaType" | "internal___type" | "internal___owner" | "sourceInstanceName" | "absolutePath" | "relativePath" | "extension" | "size" | "prettySize" | "modifiedTime" | "accessTime" | "changeTime" | "birthTime" | "root" | "dir" | "base" | "ext" | "name" | "relativeDirectory" | "dev" | "mode" | "nlink" | "uid" | "gid" | "rdev" | "ino" | "atimeMs" | "mtimeMs" | "ctimeMs" | "birthtimeMs" | "atime" | "mtime" | "ctime" | "birthtime";


export type ImageSharpConnectionSortByFieldsEnum = "id" | "children" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner" | "original___width" | "original___height" | "original___src" | "resolutions___base64" | "resolutions___tracedSVG" | "resolutions___aspectRatio" | "resolutions___width" | "resolutions___height" | "resolutions___src" | "resolutions___srcSet" | "resolutions___srcWebp" | "resolutions___srcSetWebp" | "resolutions___originalName" | "sizes___base64" | "sizes___tracedSVG" | "sizes___aspectRatio" | "sizes___src" | "sizes___srcSet" | "sizes___srcWebp" | "sizes___srcSetWebp" | "sizes___sizes" | "sizes___originalImg" | "sizes___originalName" | "responsiveResolution___base64" | "responsiveResolution___aspectRatio" | "responsiveResolution___width" | "responsiveResolution___height" | "responsiveResolution___src" | "responsiveResolution___srcSet" | "responsiveResolution___originalName" | "responsiveSizes___base64" | "responsiveSizes___aspectRatio" | "responsiveSizes___src" | "responsiveSizes___srcSet" | "responsiveSizes___sizes" | "responsiveSizes___originalImg" | "responsiveSizes___originalName" | "resize___src" | "resize___tracedSVG" | "resize___width" | "resize___height" | "resize___aspectRatio" | "resize___originalName";


export type imageSharpConnectionSortOrderValues = "ASC" | "DESC";


export type imageSharpDistinctEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type imageSharpGroupEnum = "id" | "parent" | "internal___contentDigest" | "internal___type" | "internal___owner";


export type wordpress__wp_mediaConnectionSortByFieldsEnum = "wordpress_id" | "date" | "guid" | "modified" | "slug" | "status" | "type" | "link" | "title" | "comment_status" | "ping_status" | "template" | "meta" | "description" | "caption" | "alt_text" | "media_type" | "mime_type" | "media_details___width" | "media_details___height" | "media_details___file" | "media_details___image_meta___aperture" | "media_details___image_meta___credit" | "media_details___image_meta___camera" | "media_details___image_meta___caption" | "media_details___image_meta___created_timestamp" | "media_details___image_meta___copyright" | "media_details___image_meta___focal_length" | "media_details___image_meta___iso" | "media_details___image_meta___shutter_speed" | "media_details___image_meta___title" | "media_details___image_meta___orientation" | "media_details___image_meta___keywords" | "post" | "source_url" | "_links___self" | "_links___collection" | "_links___about" | "_links___author" | "_links___replies" | "id" | "author___NODE" | "localFile___NODE" | "children" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressWpMediaConnectionSortOrderValues = "ASC" | "DESC";


export type wordpressWpMediaDistinctEnum = "wordpress_id" | "date" | "guid" | "modified" | "slug" | "status" | "type" | "link" | "title" | "comment_status" | "ping_status" | "template" | "description" | "caption" | "alt_text" | "media_type" | "mime_type" | "media_details___width" | "media_details___height" | "media_details___file" | "media_details___image_meta___aperture" | "media_details___image_meta___credit" | "media_details___image_meta___camera" | "media_details___image_meta___caption" | "media_details___image_meta___created_timestamp" | "media_details___image_meta___copyright" | "media_details___image_meta___focal_length" | "media_details___image_meta___iso" | "media_details___image_meta___shutter_speed" | "media_details___image_meta___title" | "media_details___image_meta___orientation" | "media_details___image_meta___keywords" | "post" | "source_url" | "_links___self" | "_links___collection" | "_links___about" | "_links___author" | "_links___replies" | "id" | "author___NODE" | "localFile___NODE" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressWpMediaGroupEnum = "wordpress_id" | "date" | "guid" | "modified" | "slug" | "status" | "type" | "link" | "title" | "comment_status" | "ping_status" | "template" | "description" | "caption" | "alt_text" | "media_type" | "mime_type" | "media_details___width" | "media_details___height" | "media_details___file" | "media_details___image_meta___aperture" | "media_details___image_meta___credit" | "media_details___image_meta___camera" | "media_details___image_meta___caption" | "media_details___image_meta___created_timestamp" | "media_details___image_meta___copyright" | "media_details___image_meta___focal_length" | "media_details___image_meta___iso" | "media_details___image_meta___shutter_speed" | "media_details___image_meta___title" | "media_details___image_meta___orientation" | "media_details___image_meta___keywords" | "post" | "source_url" | "_links___self" | "_links___collection" | "_links___about" | "_links___author" | "_links___replies" | "id" | "author___NODE" | "localFile___NODE" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpress__wp_trabajosConnectionSortByFieldsEnum = "wordpress_id" | "date" | "guid" | "modified" | "slug" | "status" | "type" | "link" | "title" | "template" | "tags" | "clientes" | "acf___cliente___term_id" | "acf___cliente___name" | "acf___cliente___slug" | "acf___cliente___term_group" | "acf___cliente___term_taxonomy_id" | "acf___cliente___taxonomy" | "acf___cliente___description" | "acf___cliente___wordpress_parent" | "acf___cliente___count" | "acf___cliente___filter" | "acf___campana" | "acf___tipo" | "acf___descripcion" | "acf___imagen___wordpress_id" | "acf___imagen___title" | "acf___imagen___filename" | "acf___imagen___url" | "acf___imagen___alt" | "acf___imagen___author" | "acf___imagen___description" | "acf___imagen___caption" | "acf___imagen___name" | "acf___imagen___date" | "acf___imagen___modified" | "acf___imagen___mime_type" | "acf___imagen___type" | "acf___imagen___icon" | "acf___imagen___width" | "acf___imagen___height" | "acf___imagen___sizes" | "acf___piezas" | "_links___self" | "_links___collection" | "_links___about" | "_links___wp_attachment" | "_links___wp_term" | "_links___curies" | "id" | "children" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressWpTrabajosConnectionSortOrderValues = "ASC" | "DESC";


export type wordpressWpTrabajosDistinctEnum = "wordpress_id" | "date" | "guid" | "modified" | "slug" | "status" | "type" | "link" | "title" | "template" | "tags" | "clientes" | "acf___cliente___term_id" | "acf___cliente___name" | "acf___cliente___slug" | "acf___cliente___term_group" | "acf___cliente___term_taxonomy_id" | "acf___cliente___taxonomy" | "acf___cliente___description" | "acf___cliente___wordpress_parent" | "acf___cliente___count" | "acf___cliente___filter" | "acf___campana" | "acf___tipo" | "acf___descripcion" | "acf___imagen___wordpress_id" | "acf___imagen___title" | "acf___imagen___filename" | "acf___imagen___url" | "acf___imagen___alt" | "acf___imagen___author" | "acf___imagen___description" | "acf___imagen___caption" | "acf___imagen___name" | "acf___imagen___date" | "acf___imagen___modified" | "acf___imagen___mime_type" | "acf___imagen___type" | "acf___imagen___icon" | "acf___imagen___width" | "acf___imagen___height" | "acf___imagen___sizes" | "acf___piezas" | "_links___self" | "_links___collection" | "_links___about" | "_links___wp_attachment" | "_links___wp_term" | "_links___curies" | "id" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressWpTrabajosGroupEnum = "wordpress_id" | "date" | "guid" | "modified" | "slug" | "status" | "type" | "link" | "title" | "template" | "tags" | "clientes" | "acf___cliente___term_id" | "acf___cliente___name" | "acf___cliente___slug" | "acf___cliente___term_group" | "acf___cliente___term_taxonomy_id" | "acf___cliente___taxonomy" | "acf___cliente___description" | "acf___cliente___wordpress_parent" | "acf___cliente___count" | "acf___cliente___filter" | "acf___campana" | "acf___tipo" | "acf___descripcion" | "acf___imagen___wordpress_id" | "acf___imagen___title" | "acf___imagen___filename" | "acf___imagen___url" | "acf___imagen___alt" | "acf___imagen___author" | "acf___imagen___description" | "acf___imagen___caption" | "acf___imagen___name" | "acf___imagen___date" | "acf___imagen___modified" | "acf___imagen___mime_type" | "acf___imagen___type" | "acf___imagen___icon" | "acf___imagen___width" | "acf___imagen___height" | "acf___imagen___sizes" | "acf___piezas" | "_links___self" | "_links___collection" | "_links___about" | "_links___wp_attachment" | "_links___wp_term" | "_links___curies" | "id" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpress__wp_typesConnectionSortByFieldsEnum = "wordpress_id" | "description" | "hierarchical" | "name" | "slug" | "taxonomies" | "rest_base" | "_links___collection" | "_links___wp_items" | "_links___curies" | "id" | "children" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressWpTypesConnectionSortOrderValues = "ASC" | "DESC";


export type wordpressWpTypesDistinctEnum = "wordpress_id" | "description" | "hierarchical" | "name" | "slug" | "taxonomies" | "rest_base" | "_links___collection" | "_links___wp_items" | "_links___curies" | "id" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressWpTypesGroupEnum = "wordpress_id" | "description" | "hierarchical" | "name" | "slug" | "taxonomies" | "rest_base" | "_links___collection" | "_links___wp_items" | "_links___curies" | "id" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpress__wp_statusesConnectionSortByFieldsEnum = "wordpress_id" | "name" | "public" | "queryable" | "slug" | "_links___archives" | "id" | "children" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressWpStatusesConnectionSortOrderValues = "ASC" | "DESC";


export type wordpressWpStatusesDistinctEnum = "wordpress_id" | "name" | "public" | "queryable" | "slug" | "_links___archives" | "id" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressWpStatusesGroupEnum = "wordpress_id" | "name" | "public" | "queryable" | "slug" | "_links___archives" | "id" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpress__wp_taxonomiesConnectionSortByFieldsEnum = "wordpress_id" | "name" | "slug" | "description" | "types" | "hierarchical" | "rest_base" | "_links___collection" | "_links___wp_items" | "_links___curies" | "id" | "children" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressWpTaxonomiesConnectionSortOrderValues = "ASC" | "DESC";


export type wordpressWpTaxonomiesDistinctEnum = "wordpress_id" | "name" | "slug" | "description" | "types" | "hierarchical" | "rest_base" | "_links___collection" | "_links___wp_items" | "_links___curies" | "id" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressWpTaxonomiesGroupEnum = "wordpress_id" | "name" | "slug" | "description" | "types" | "hierarchical" | "rest_base" | "_links___collection" | "_links___wp_items" | "_links___curies" | "id" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpress__CATEGORYConnectionSortByFieldsEnum = "wordpress_id" | "count" | "description" | "link" | "name" | "slug" | "wordpress_parent" | "meta" | "_links___self" | "_links___collection" | "_links___about" | "_links___wp_post_type" | "_links___curies" | "id" | "taxonomy___NODE" | "children" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressCategoryConnectionSortOrderValues = "ASC" | "DESC";


export type wordpressCategoryDistinctEnum = "wordpress_id" | "count" | "description" | "link" | "name" | "slug" | "wordpress_parent" | "_links___self" | "_links___collection" | "_links___about" | "_links___wp_post_type" | "_links___curies" | "id" | "taxonomy___NODE" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressCategoryGroupEnum = "wordpress_id" | "count" | "description" | "link" | "name" | "slug" | "wordpress_parent" | "_links___self" | "_links___collection" | "_links___about" | "_links___wp_post_type" | "_links___curies" | "id" | "taxonomy___NODE" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpress__TAGConnectionSortByFieldsEnum = "wordpress_id" | "count" | "description" | "link" | "name" | "slug" | "meta" | "_links___self" | "_links___collection" | "_links___about" | "_links___wp_post_type" | "_links___curies" | "id" | "taxonomy___NODE" | "children" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressTagConnectionSortOrderValues = "ASC" | "DESC";


export type wordpressTagDistinctEnum = "wordpress_id" | "count" | "description" | "link" | "name" | "slug" | "_links___self" | "_links___collection" | "_links___about" | "_links___wp_post_type" | "_links___curies" | "id" | "taxonomy___NODE" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressTagGroupEnum = "wordpress_id" | "count" | "description" | "link" | "name" | "slug" | "_links___self" | "_links___collection" | "_links___about" | "_links___wp_post_type" | "_links___curies" | "id" | "taxonomy___NODE" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpress__wp_clientesConnectionSortByFieldsEnum = "wordpress_id" | "count" | "description" | "link" | "name" | "slug" | "meta" | "_links___self" | "_links___collection" | "_links___about" | "_links___wp_post_type" | "_links___curies" | "id" | "taxonomy___NODE" | "children" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressWpClientesConnectionSortOrderValues = "ASC" | "DESC";


export type wordpressWpClientesDistinctEnum = "wordpress_id" | "count" | "description" | "link" | "name" | "slug" | "_links___self" | "_links___collection" | "_links___about" | "_links___wp_post_type" | "_links___curies" | "id" | "taxonomy___NODE" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressWpClientesGroupEnum = "wordpress_id" | "count" | "description" | "link" | "name" | "slug" | "_links___self" | "_links___collection" | "_links___about" | "_links___wp_post_type" | "_links___curies" | "id" | "taxonomy___NODE" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpress__wp_usersConnectionSortByFieldsEnum = "wordpress_id" | "name" | "url" | "description" | "link" | "slug" | "meta" | "_links___self" | "_links___collection" | "id" | "all_authored_entities___NODE" | "authored_wordpress__wp_media___NODE" | "children" | "parent" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressWpUsersConnectionSortOrderValues = "ASC" | "DESC";


export type wordpressWpUsersDistinctEnum = "wordpress_id" | "name" | "url" | "description" | "link" | "slug" | "_links___self" | "_links___collection" | "id" | "all_authored_entities___NODE" | "authored_wordpress__wp_media___NODE" | "internal___type" | "internal___contentDigest" | "internal___owner";


export type wordpressWpUsersGroupEnum = "wordpress_id" | "name" | "url" | "description" | "link" | "slug" | "_links___self" | "_links___collection" | "id" | "all_authored_entities___NODE" | "authored_wordpress__wp_media___NODE" | "internal___type" | "internal___contentDigest" | "internal___owner";

