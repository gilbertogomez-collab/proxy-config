function FindProxyForURL(url, host) {

    /* =========================
       IMPRESORA
    ========================== */
    if (host == "10.10.20.10") {
        return "DIRECT";
    }

    /* =========================
       RED LOCAL / INTRANET
    ========================== */
    if (
        isPlainHostName(host) ||
        shExpMatch(host, "localhost") ||
        shExpMatch(host, "127.*") ||
        shExpMatch(host, "10.*") ||
        shExpMatch(host, "192.168.*") ||
        shExpMatch(host, "172.16.*") ||
        shExpMatch(host, "172.17.*") ||
        shExpMatch(host, "172.18.*") ||
        shExpMatch(host, "172.19.*") ||
        shExpMatch(host, "172.20.*") ||
        shExpMatch(host, "172.21.*") ||
        shExpMatch(host, "172.22.*") ||
        shExpMatch(host, "172.23.*") ||
        shExpMatch(host, "172.24.*") ||
        shExpMatch(host, "172.25.*") ||
        shExpMatch(host, "172.26.*") ||
        shExpMatch(host, "172.27.*") ||
        shExpMatch(host, "172.28.*") ||
        shExpMatch(host, "172.29.*") ||
        shExpMatch(host, "172.30.*") ||
        shExpMatch(host, "172.31.*")
    ) {
        return "DIRECT";
    }

    /* =========================
       OUTLOOK WEB + LOGIN + ADJUNTOS
       + ONEDRIVE + PDF PREVIEW
    ========================== */
    if (

        /* Outlook / Office */
        shExpMatch(host, "*.office.com") ||
        shExpMatch(host, "*.office365.com") ||
        shExpMatch(host, "*.office.net") ||
        shExpMatch(host, "*.outlook.office.com") ||
        shExpMatch(host, "*.outlook.office365.com") ||
        shExpMatch(host, "*.cloud.microsoft") ||

        /* Login Microsoft */
        shExpMatch(host, "*.microsoftonline.com") ||
        shExpMatch(host, "*.aadcdn.microsoftonline-p.com") ||
        shExpMatch(host, "*.msauth.net") ||
        shExpMatch(host, "*.msauthimages.net") ||
        shExpMatch(host, "*.msftauth.net") ||
        shExpMatch(host, "*.msftauthimages.net") ||

        /* Static / CDN */
        shExpMatch(host, "*.onecdn.static.microsoft") ||
        shExpMatch(host, "*.msocdn.com") ||
        shExpMatch(host, "*.azureedge.net") ||
        shExpMatch(host, "*.officeapps.live.com") ||
        shExpMatch(host, "*.officeapps-df.live.com") ||
        shExpMatch(host, "*.view.officeapps.live.com") ||
        shExpMatch(host, "*.cdn.office.net") ||

        /* Adjuntos Outlook */
        shExpMatch(host, "*.attachments.office.net") ||
        shExpMatch(host, "*.substrate.office.com") ||

        /* OneDrive / Descargas */
        host == "onedrive.live.com" ||
        shExpMatch(host, "*.onedrive.live.com") ||
        shExpMatch(host, "*.onedrive.com") ||
        shExpMatch(host, "*.storage.live.com") ||
        shExpMatch(host, "*.1drv.ms") ||

        /* SharePoint */
        shExpMatch(host, "*.sharepoint.com") ||
        shExpMatch(host, "*.sharepoint-df.com") ||
        shExpMatch(host, "*.sharepointonline.com") ||

        /* Live legacy */
        shExpMatch(host, "*.live.com") ||
        shExpMatch(host, "*.live.net") ||

        /* Viewer */
        shExpMatch(host, "*.usercontent.microsoft")

    ) {
        return "DIRECT";
    }

    /* =========================
       BLOQUEAR TODO LO DEMÁS
    ========================== */
    return "PROXY 127.0.0.1:9999";
}
