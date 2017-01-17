CREATE TABLE [dbo].[ReferenceNumber] (
    [Id]                INT           NULL,
    [ReferenceString]   NVARCHAR (50) NULL,
    [DateCreated]       DATETIME      NULL,
    [DateUpdated]       DATETIME      NOT NULL,
    [ManpowerRequestId] INT           NULL,
    [StatusID]          INT           NULL,
    CONSTRAINT [FK_ReferenceNumber_ManpowerRequest] FOREIGN KEY ([ManpowerRequestId]) REFERENCES [dbo].[ManpowerRequest] ([Id]),
    CONSTRAINT [FK_ReferenceNumber_Status] FOREIGN KEY ([StatusID]) REFERENCES [dbo].[Status] ([Id])
);




GO
CREATE UNIQUE NONCLUSTERED INDEX [NonClusteredIndex-20170117-175850]
    ON [dbo].[ReferenceNumber]([ReferenceString] ASC);

