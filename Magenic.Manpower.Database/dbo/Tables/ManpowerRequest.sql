CREATE TABLE [dbo].[ManpowerRequest] (
    [Id]                      INT            IDENTITY (1, 1) NOT NULL,
    [ProjectName]             NVARCHAR (MAX) NOT NULL,
    [PrimarySkillID]          INT            NOT NULL,
    [RegionID]                INT            NOT NULL,
    [DesiredApplicantLevelID] INT            NOT NULL,
    [NumberOfHires]           INT            NOT NULL,
    [ProjectedStartDate]      DATETIME       NOT NULL,
    [JobDescription]          NVARCHAR (MAX) NOT NULL,
    [RequestedBy]             INT            NOT NULL,
    [DateCreated]             DATETIME       NOT NULL,
    [DateUpdated]             DATETIME       NULL,
    CONSTRAINT [PK_ManpowerRequest] PRIMARY KEY CLUSTERED ([Id] ASC),
    CONSTRAINT [FK_ManpowerRequest_ApplicantLevel] FOREIGN KEY ([DesiredApplicantLevelID]) REFERENCES [dbo].[ApplicantLevel] ([Id]),
    CONSTRAINT [FK_ManpowerRequest_MagenicRegion] FOREIGN KEY ([RegionID]) REFERENCES [dbo].[MagenicRegion] ([Id]),
    CONSTRAINT [FK_ManpowerRequest_PrimarySkill] FOREIGN KEY ([PrimarySkillID]) REFERENCES [dbo].[PrimarySkill] ([Id])
);

