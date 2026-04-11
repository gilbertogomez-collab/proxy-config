function FindProxyForURL(url, host) {

    if (shExpMatch(host, "*.office.com") ||
        shExpMatch(host, "*.office365.com") ||
        shExpMatch(host, "*.outlook.office.com") ||
        shExpMatch(host, "*.cloud.microsoft") ||
        shExpMatch(host, "*.microsoftonline.com") ||
        shExpMatch(host, "*.live.com") ||
        shExpMatch(host, "*.msocdn.com") ||
        shExpMatch(host, "*.azureedge.net") ||
        shExpMatch(host, "*.microsoft.com") ||
        shExpMatch(host, "*.office.net") ||
        shExpMatch(host, "*.onecdn.static.microsoft") ||
        shExpMatch(host, "*.officeapps.live.com")) {

        return "DIRECT";
    }

    return "PROXY 127.0.0.1:9999";
}
