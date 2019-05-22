<template>
    <div class='manage-user'>
        <!-- 左侧菜单 -->
        <div class="ui-layout-west">
		<div class="main-content">
			<div class="box box-main">
				<div class="box-header">
					<div class="box-title">
						<i class="fa icon-grid"></i> 组织机构
					</div>
					<div class="box-tools pull-right">
					    <a type="button" class="btn btn-box-tool menuItem" href="#" onclick="dept()" title="管理部门"><i class="fa fa-edit"></i></a>
						<button type="button" class="btn btn-box-tool" id="btnExpand" title="展开" style="display:none;"><i class="fa fa-chevron-up"></i></button>
						<button type="button" class="btn btn-box-tool" id="btnCollapse" title="折叠"><i class="fa fa-chevron-down"></i></button>
						<button type="button" class="btn btn-box-tool" id="btnRefresh" title="刷新部门"><i class="fa fa-refresh"></i></button>
					</div>
				</div>
				<div class="ui-layout-content">
					<div id="tree" class="ztree"></div>
				</div>
			</div>
		</div>
	</div>
    
    <!-- 右侧-头部 -->
    <div class="container-div ui-layout-center">
		<div class="row">
			<div class="col-sm-12 search-collapse">
				<form id="user-form">
					<input type="hidden" id="deptId" name="deptId">
	                <input type="hidden" id="parentId" name="parentId">
					<div class="select-list">
						<ul>
							<li>
								登录名称：<input type="text" name="loginName"/>
							</li>
							<li>
								手机号码：<input type="text" name="phonenumber"/>
							</li>
							<li>
								用户状态：<select name="status" th:with="type=${@dict.getType('sys_normal_disable')}">
									<option value="">所有</option>
									<option th:each="dict : ${type}" th:text="${dict.dictLabel}" th:value="${dict.dictValue}"></option>
								</select>
							</li>
							<li class="select-time">
								<label>创建时间： </label>
								<input type="text" class="time-input" id="startTime" placeholder="开始时间" name="params[beginTime]"/>
								<span>-</span>
								<input type="text" class="time-input" id="endTime" placeholder="结束时间" name="params[endTime]"/>
							</li>
							<li>
								<a class="btn btn-primary btn-rounded btn-sm" onclick="$.table.search()"><i class="fa fa-search"></i>&nbsp;搜索</a>
							    <a class="btn btn-warning btn-rounded btn-sm" onclick="$.form.reset()"><i class="fa fa-refresh"></i>&nbsp;重置</a>
							</li>
						</ul>
					</div>
				</form>
			</div>
			
	        <div class="btn-group-sm" id="toolbar" role="group">
	        	<a class="btn btn-success" onclick="$.operate.addTab()" shiro:hasPermission="system:user:add">
	                <i class="fa fa-plus"></i> 新增
	            </a>
	             <a class="btn btn-primary btn-edit disabled" onclick="$.operate.editTab()" shiro:hasPermission="system:user:edit">
		            <i class="fa fa-edit"></i> 修改
		        </a>
	            <a class="btn btn-danger btn-del disabled" onclick="$.operate.removeAll()" shiro:hasPermission="system:user:remove">
	                <i class="fa fa-remove"></i> 删除
	            </a>
	            <a class="btn btn-info" onclick="$.table.importExcel()" shiro:hasPermission="system:user:import">
		            <i class="fa fa-upload"></i> 导入
		        </a>
	            <a class="btn btn-warning" onclick="$.table.exportExcel()" shiro:hasPermission="system:user:export">
		            <i class="fa fa-download"></i> 导出
		        </a>
	        </div>
	        
	        <div class="col-sm-12 select-table table-striped">
			    <table id="bootstrap-table" data-mobile-responsive="true"></table>
			</div>
		</div>
	</div>
     
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>

</style>


