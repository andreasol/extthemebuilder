<%@ page contentType="text/javascript;charset=UTF-8" language="java" %>

<%@ include file="/WEB-INF/jsp/include/include_js.jsp" %>

Ext.namespace('Ext.ux.MyApp');

Ext.ux.MyApp.gridWindow=Ext.extend(Ext.ux.MyApp.Module, {
init : function(){
        var idWindow = 'list-ct-grid';

        var oldWin = myView.getTaskButtonByIdWin(idWindow).win;
        if ((!oldWin)||oldWin==undefined){
            oldWin = this.createWindow(idWindow);
            myView.statusBar.addTaskButton(oldWin);
        }
        oldWin.show();

    },


createWindow : function(idWin){
    var listWin;
    var listStore;

    if ((!listWin)||(listWin==undefined)){
    var xg = Ext.grid;

    // shared reader
    var reader = new Ext.data.ArrayReader({}, [
       {name: 'company'},
       {name: 'price', type: 'float'},
       {name: 'change', type: 'float'},
       {name: 'pctChange', type: 'float'},
       {name: 'lastChange', type: 'date', dateFormat: 'n/j h:ia'},
       {name: 'industry'},
       {name: 'desc'}
    ]);

// Array data for the grids
Ext.grid.dummyData = [
    ['3m Co',71.72,0.02,0.03,'9/1 12:00am', 'Manufacturing'],
    ['Alcoa Inc',29.01,0.42,1.47,'9/1 12:00am', 'Manufacturing'],
    ['Altria Group Inc',83.81,0.28,0.34,'9/1 12:00am', 'Manufacturing'],
    ['American Express Company',52.55,0.01,0.02,'9/1 12:00am', 'Finance'],
    ['American International Group, Inc.',64.13,0.31,0.49,'9/1 12:00am', 'Services'],
    ['AT&T Inc.',31.61,-0.48,-1.54,'9/1 12:00am', 'Services'],
    ['Boeing Co.',75.43,0.53,0.71,'9/1 12:00am', 'Manufacturing'],
    ['Caterpillar Inc.',67.27,0.92,1.39,'9/1 12:00am', 'Services'],
    ['Citigroup, Inc.',49.37,0.02,0.04,'9/1 12:00am', 'Finance'],
    ['E.I. du Pont de Nemours and Company',40.48,0.51,1.28,'9/1 12:00am', 'Manufacturing'],
    ['Exxon Mobil Corp',68.1,-0.43,-0.64,'9/1 12:00am', 'Manufacturing'],
    ['General Electric Company',34.14,-0.08,-0.23,'9/1 12:00am', 'Manufacturing'],
    ['General Motors Corporation',30.27,1.09,3.74,'9/1 12:00am', 'Automotive'],
    ['Hewlett-Packard Co.',36.53,-0.03,-0.08,'9/1 12:00am', 'Computer'],
    ['Honeywell Intl Inc',38.77,0.05,0.13,'9/1 12:00am', 'Manufacturing'],
    ['Intel Corporation',19.88,0.31,1.58,'9/1 12:00am', 'Computer'],
    ['International Business Machines',81.41,0.44,0.54,'9/1 12:00am', 'Computer'],
    ['Johnson & Johnson',64.72,0.06,0.09,'9/1 12:00am', 'Medical'],
    ['JP Morgan & Chase & Co',45.73,0.07,0.15,'9/1 12:00am', 'Finance'],
    ['McDonald\'s Corporation',36.76,0.86,2.40,'9/1 12:00am', 'Food'],
    ['Merck & Co., Inc.',40.96,0.41,1.01,'9/1 12:00am', 'Medical'],
    ['Microsoft Corporation',25.84,0.14,0.54,'9/1 12:00am', 'Computer'],
    ['Pfizer Inc',27.96,0.4,1.45,'9/1 12:00am', 'Services', 'Medical'],
    ['The Coca-Cola Company',45.07,0.26,0.58,'9/1 12:00am', 'Food'],
    ['The Home Depot, Inc.',34.64,0.35,1.02,'9/1 12:00am', 'Retail'],
    ['The Procter & Gamble Company',61.91,0.01,0.02,'9/1 12:00am', 'Manufacturing'],
    ['United Technologies Corporation',63.26,0.55,0.88,'9/1 12:00am', 'Computer'],
    ['Verizon Communications',35.57,0.39,1.11,'9/1 12:00am', 'Services'],
    ['Wal-Mart Stores, Inc.',45.45,0.73,1.63,'9/1 12:00am', 'Retail'],
    ['Walt Disney Company (The) (Holding Company)',29.89,0.24,0.81,'9/1 12:00am', 'Services']
];

// add in some dummy descriptions
for(var i = 0; i < Ext.grid.dummyData.length; i++){
    Ext.grid.dummyData[i].push(Ext.dummy.bogusMarkup);
}
    
    ////////////////////////////////////////////////////////////////////////////////////////
    // Grid 4
    ////////////////////////////////////////////////////////////////////////////////////////
    var sm2 = new xg.CheckboxSelectionModel({
        listeners: {
            // On selection change, set enabled state of the removeButton
            // which was placed into the GridPanel using the ref config
            selectionchange: function(sm) {
                if (sm.getCount()) {
                    panel.removeButton.enable();
                } else {
                    panel.removeButton.disable();
                }
            }
        }
    });
    var grid4 = new xg.GridPanel({
        id:'button-grid',
        store: new Ext.data.Store({
            reader: reader,
            data: xg.dummyData
        }),
        cm: new xg.ColumnModel([
            sm2,
            {id:'company',header: "Company", width: 40, sortable: true, dataIndex: 'company'},
            {header: "Price", width: 20, sortable: true, renderer: Ext.util.Format.usMoney, dataIndex: 'price'},
            {header: "Change", width: 20, sortable: true, dataIndex: 'change'},
            {header: "% Change", width: 20, sortable: true, dataIndex: 'pctChange'},
            {header: "Last Updated", width: 20, sortable: true, renderer: Ext.util.Format.dateRenderer('m/d/Y'), dataIndex: 'lastChange'}
        ]),
        sm: sm2,

        viewConfig: {
            forceFit:true
        },
        columnLines: true,


        buttonAlign:'center',



        width:'auto',
        height:300,
        autoWidth:true,
        layout:'fit',
        region:'center',
        frame:false,
        header:false,
        iconCls:'icon-grid'
    });



        var panel = new Ext.Panel({
            frame:true
            ,xtype:'panel'
            , margin:'10 10 10 10'
            , region:'center'
            , layout:'border'
            , buttonAlign:'center'
                    // inline buttons
            ,buttons: [{text:'Save'},{text:'Cancel'}]
                    // inline toolbars
            ,tbar:[{
                text:'Add Something',
                tooltip:'Add a new row',
                iconCls:'add'
            }, '-', {
                text:'Options',
                tooltip:'Blah blah blah blaht',
                iconCls:'option'
            },'-',{
                text:'Remove Something',
                tooltip:'Remove the selected item',
                iconCls:'remove',

                // Place a reference in the GridPanel
                ref: '../removeButton',
                disabled: true
            }]
            , items:[grid4]});

        listWin = new Ext.ux.MyApp.CesiumBaseWindow({
            id:idWin,
            width:630,
            height:400,
            title:'Grid example',
            manager:windows,
            items: [panel]
        });

    }
    return listWin;
}
})