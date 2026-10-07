import { splitMap } from '../../common/constants'

// order matches the layout menu; shortcut names are `app_layout<key>`
export const layoutShortcutKeys = Object.keys(splitMap)

export default () => {
  return [
    {
      name: 'app_closeCurrentTab',
      shortcut: 'alt+w',
      shortcutMac: 'alt+w'
    },
    {
      name: 'app_mouseWheelDownCloseTab',
      shortcut: 'mouseWheel',
      shortcutMac: 'mouseWheel',
      readonly: true
    },
    {
      name: 'app_reloadCurrentTab',
      shortcut: 'alt+r',
      shortcutMac: 'alt+r'
    },
    {
      name: 'app_reloadAll',
      shortcut: 'alt+y',
      shortcutMac: 'alt+y'
    },
    {
      name: 'app_cloneToNextLayout',
      shortcut: 'alt+/',
      shortcutMac: 'alt+/'
    },
    {
      name: 'app_moveToNextLayout',
      shortcut: 'shift+alt+/',
      shortcutMac: 'shift+alt+/'
    },
    {
      name: 'app_toggleBroadcastInput',
      shortcut: 'ctrl+alt+b',
      shortcutMac: 'ctrl+alt+b'
    },
    {
      name: 'app_nextLayout',
      shortcut: 'ctrl+alt+]',
      shortcutMac: 'ctrl+alt+]'
    },
    {
      name: 'app_prevLayout',
      shortcut: 'ctrl+alt+[',
      shortcutMac: 'ctrl+alt+['
    },
    ...layoutShortcutKeys.map((key, i) => ({
      name: `app_layout${key}`,
      shortcut: `ctrl+alt+${i + 1}`,
      shortcutMac: `ctrl+alt+${i + 1}`
    })),
    {
      name: 'app_duplicateTab',
      shortcut: 'alt+c',
      shortcutMac: 'alt+c'
    },
    {
      name: 'app_newBookmark',
      shortcut: 'ctrl+n',
      shortcutMac: 'meta+n'
    },
    {
      name: 'app_newTab',
      shortcut: 'alt+q',
      shortcutMac: 'alt+q'
    },
    {
      name: 'app_toggleAddBtn',
      shortcut: 'alt+n',
      shortcutMac: 'alt+n'
    },
    {
      name: 'app_togglefullscreen',
      shortcut: 'alt+f',
      shortcutMac: 'alt+f'
    },
    {
      name: 'app_zoomin',
      shortcut: 'ctrl+=',
      shortcutMac: 'meta+='
    },
    {
      name: 'app_zoomout',
      shortcut: 'ctrl+-',
      shortcutMac: 'meta+-'
    },
    {
      name: 'app_prevTab',
      shortcut: 'ctrl+shift+tab',
      shortcutMac: 'ctrl+shift+tab'
    },
    {
      name: 'app_nextTab',
      shortcut: 'ctrl+tab',
      shortcutMac: 'ctrl+tab'
    },
    {
      name: 'terminal_clear',
      shortcut: 'ctrl+l,ctrl+shift+l',
      shortcutMac: 'meta+l'
    },
    // {
    //   name: 'terminal_selectAll',
    //   shortcut: 'ctrl+a,ctrl+shift+a',
    //   shortcutMac: 'meta+a',
    //   skipMac: true,
    //   readonly: true
    // },
    {
      name: 'terminal_copy',
      shortcut: 'ctrl+c,ctrl+shift+c',
      shortcutMac: 'meta+c',
      skipMac: true,
      readonly: true
    },
    {
      name: 'terminal_paste',
      shortcut: 'ctrl+v,ctrl+shift+v',
      shortcutMac: 'meta+v',
      readonly: true
    },
    {
      name: 'terminal_search',
      shortcut: 'ctrl+f',
      shortcutMac: 'meta+f'
    },
    {
      name: 'terminal_pasteSelected',
      shortcut: 'alt+insert',
      shortcutMac: 'alt+insert'
    },
    {
      name: 'terminal_showNormalBuffer',
      shortcut: 'ctrl+ArrowUp',
      shortcutMac: 'meta+↑'
    },
    {
      name: 'terminal_zoominTerminal',
      shortcut: 'ctrl+▲',
      shortcutMac: 'meta+▲'
    },
    {
      name: 'terminal_zoomoutTerminal',
      shortcut: 'ctrl+▼',
      shortcutMac: 'meta+▼'
    },
    {
      name: 'terminal_syncSftpPath',
      shortcut: 'alt+shift+f11',
      shortcutMac: 'alt+shift+f11'
    }
  ]
}
