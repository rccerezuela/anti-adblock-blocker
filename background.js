// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {

  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: 
        [
          new chrome.declarativeContent.PageStateMatcher({
              pageUrl: {hostEquals: 'www.heraldo.es'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'www.elmundo.es'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'okdiario.com'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'www.abc.es'},
          }),
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'elpais.com'},
          }),
         
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'www.telecinco.es'},
          })
          

        ],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});
